import Logo from '../../assets/logo.svg';
import Style from './Header.module.css';

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.wrapper}>
        <img src={Logo} alt="logo" className={Style.logo} />
        <h2 className="header-name">social</h2>
      </div>
    </header>
  )
}

export default Header;