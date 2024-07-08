import MenuBar from "../components/MenuBar";
import styles from "./PesquisaAvancada.module.css";
import Tabela from "../components/Tabela";

function PesquisaAvancada() {
  return (
    <div className={styles.container}>
      <MenuBar />
      <div className={styles.content}>
        <h1 className={styles.titulo}>Pesquisa Avançada</h1>
        <div className={styles.lowerDiv}>
          <Tabela />
        </div>
        <p>Atenção: Os dados referidos são apenas do ano de 2017.</p>
      </div>
    </div>
  );
}

export default PesquisaAvancada;
