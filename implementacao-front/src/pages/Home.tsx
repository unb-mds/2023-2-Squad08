import React from 'react';
import MenuBar from "../components/MenuBar";
import styles from "./Home.module.css";
import Chart from "react-apexcharts";

const column = {
  options: {
    chart: {
      id: 'apexcrt-example'
    },
    xaxis: {
      categories: [2009, 2013, 2017, 2020, 2021]
    }
  },
  series: [{
    name: 'Nomeações',
    data: [81, 217, 847, 2316, 3253],
    color: "#FCA622",
  },
  {
    name: 'Exonerações',
    data: [16, 39, 149, 618, 708],
    color: "#A11208",
  }]
};

const cidades_nomeiam = ['Campo Bom', 'Ibirubá', 'Santo Ângelo', 'Augusto Pestana', 'Independência'];
const cidades_exoneram = ['Independência', 'Campo Bom', 'Santana da Boa Vista', 'Augusto Pestana', 'Ibirubá'];

const quantidade_nomeacoes = [700, 598, 459, 398, 350];
const quantidade_exoneracoes = [149, 116, 111, 107, 100];
const total = [6714, 1530];

const pie = {
  options: {
    labels: ['Nomeações', 'Exonerações'],
    colors: ["#FCA622", "#A11208"]
  },
  series: total,
};

const Home: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}><em><b>Dashboard</b></em> Rio Grande do Sul</h1>
          </div>
          <div className={styles.upperDiv}>
            <div className={styles.card}>
              <h2>Total Mapeado</h2>
              <p>Nomeações: {total[0]}</p>
              <p>Exonerações: {total[1]}</p>
            </div>
            <div className={styles.card}>
              <h2>Municípios que mais nomeiam:</h2>
              <ul>
                {cidades_nomeiam.map((cidade, index) => (
                  <li key={index}>{cidade} - {quantidade_nomeacoes[index]}</li>
                ))}
              </ul>
            </div>
            <div className={styles.card}>
              <h2>Municípios que mais exoneram:</h2>
              <ul>
                {cidades_exoneram.map((cidade, index) => (
                  <li key={index}>{cidade} - {quantidade_exoneracoes[index]}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.lowerDiv}>
            <div className={styles.chartCard}>
              <h2 className={styles.graphTitle}>Exonerações x Nomeações nos anos analisados</h2>
              <Chart options={pie.options} series={pie.series} type="pie" width="100%" />
            </div>
            <div className={styles.chartCard}>
              <h2 className={styles.graphTitle}>Nomeações e Exonerações ao longo dos anos</h2>
              <Chart options={column.options} series={column.series} type="bar" width="100%" height={345} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
