import MenuBar from "../components/MenuBar";
import styles from "./PesquisaAvancada.module.css";

function PesquisaAvancada() {
  return (
    <div className={styles.container}>
      <MenuBar />
      <div className={styles.content}>
        <h1 className={styles.title}>Pesquisa Avançada</h1>
        <hr />
        <div className={styles.searchBar}>
          <input type="text" placeholder="Digite aqui sua pesquisa..." />
          <button>Pesquisar</button>
        </div>
        <div>
          <table className={styles.tabela}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Ação</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.footer}>Atenção: Os dados referidos são apenas do ano de 2017.</p>
      </div>
    </div>
  );
}

export default PesquisaAvancada;
