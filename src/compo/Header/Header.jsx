import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>Top Travel</div>
      <nav className={style.nav}>
        <a href="#" className={style.active}>Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
