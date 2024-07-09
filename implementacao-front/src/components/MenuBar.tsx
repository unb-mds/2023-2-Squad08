import styles from './MenuBar.module.css'
import logo from "../assets/logo.png"

function MenuBar() {
  return (
    <div className={styles.menuBar}>
      <div className={styles.links}>
        <a className={styles.link} href="/">Home</a>
        <a className={styles.link} href="/pesquisaAvancada">Pesquisa</a>
        <a className={styles.link} href="/pesquisaMunicipios">Municípios</a>
        <a className={styles.link} href="/about">Sobre</a>
      </div>
      <div className={styles.logo}>
        <img src={logo} className="logo" alt="" width="150" height="125" />
      </div>
    </div>
  )
}

export default MenuBar