import "./styles.scss"
import { Link } from 'react-router-dom'
import { Auth } from './../auth/ui';

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__menu-nav">
            <Link to='/' className="logo">
              <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo"></img>
            </Link>
            <Link to='/' className="logo-mini" hidden>
              <img src={process.env.PUBLIC_URL + '/images/logo-mini.png'} alt="logo"></img>
            </Link>
            <Link to='/news'>
              Новости
            </Link>
          </div>
          <div className="header__menu-auth">
            <Auth />
          </div>
        </div>

      </div>
    </header>
  )
}