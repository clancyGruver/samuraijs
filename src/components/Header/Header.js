import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Style from './Header.module.css';

const Header = (props) => {
  return (
    <header className={Style.header}>
      <div className={Style.wrapper}>
        <div className={Style.logoContainer}>
          <img src={Logo} alt="logo" className={Style.logo} />
          <h2 className="header-name">social</h2>
        </div>
        <div className={Style.loginBlock}>
          { props.isAuth
            ? props.login
            :<NavLink to="/login">Login</NavLink>
          }
        </div>
      </div>
    </header>
  )
}

export default Header;