import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState, ChangeEvent } from "react";
import MenuBar from "../components/MenuBar";
import styles from "./PesquisaMunicipios.module.css";
import Chart from "react-apexcharts";
import { Qtd_2009, Qtd_2013, Qtd_2017, Qtd_2020, Qtd_2021 } from "../data/municipioDados";

interface Municipio {
  nome: string;
}

function PesquisaMunicipios(): JSX.Element {
  const [municipios, setMunicipios] = useState<string[]>([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState<string>('');
  const [chartData, setChartData] = useState<any>({
    options: {
      chart: {
        id: 'bar-graphic'
      },
      xaxis: {
        categories: [2009, 2013, 2017, 2020, 2021]
      }
    },
    series: [{
      name: 'Nomeações',
      data: [0, 0, 0, 0, 0],
      color: "#FCA622",
    },
    {
      name: 'Exonerações',
      data: [0, 0, 0, 0, 0],
      color: "#A11208",
    }]
  });

  const apiIBGE = async () => {
    try {
      const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/RS/municipios");
      const data: Municipio[] = await response.json();
      setMunicipios(data.map((municipio) => municipio.nome.toLowerCase()));
    } catch (error) {
      console.error("Erro ao buscar municípios:", error);
    }
  };

  useEffect(() => {
    apiIBGE();
  }, []);

  const getDataFromMunicipio = (municipio: string) => {
    const nomeacoes = [];
    const exoneracoes = [];
    const dados = [Qtd_2009, Qtd_2013, Qtd_2017, Qtd_2020, Qtd_2021];
    for (let i = 0; i < dados.length; i++) {
      const found = dados[i].find((item) => item.municipio.toLowerCase() === municipio.toLowerCase());
      if (found) {
        nomeacoes.push(Number(found.nomeacoes));
        exoneracoes.push(Number(found.exoneracoes));
      } else {
        nomeacoes.push(0);
        exoneracoes.push(0);
      }
    }
    return { nomeacoes, exoneracoes };
  };

  const handleMunicipio = (event: ChangeEvent<{}>, selectedValue: string | null) => {
    event.preventDefault();
    if (selectedValue) {
      setSelectedMunicipio(selectedValue);
      const { nomeacoes, exoneracoes } = getDataFromMunicipio(selectedValue);
      setChartData({
        ...chartData,
        series: [
          { name: "Nomeações", data: nomeacoes, color: "#FCA622" },
          { name: "Exonerações", data: exoneracoes, color: "#A11208" },
        ],
      });
    }
  };

  return (
    <div className={styles.container}>
      <MenuBar />
      <div className={styles.content}>
            <h1 className={styles.Title}>Pesquisa por município</h1>
            <hr />
            <div className={styles.inputs}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={municipios}
                value={selectedMunicipio}
                isOptionEqualToValue={(option, value) => option === value}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Busque um município..." />}
                onChange={handleMunicipio}
              />
            </div>
        <div className={styles.lowerDiv}>
          <Chart options={chartData.options} series={chartData.series} type="bar" width={1000} height={400} />
        </div>
      </div>
    </div>
  );
}

export default PesquisaMunicipios;
