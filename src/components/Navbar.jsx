import React from 'react';
import Logo from '../assets/IMAGE.png';
import style from './Navbar.module.css';
import './Button.css';


function Navbar() {
  return (
    <header>
        <nav className={style.nav}>
            <div className="container">
                <div className={style.navbar}>
                    <div className={style.nav_left}>
                        <div className="nav-left__img">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="nav-left__links">
                            <ul className={style.nav_items}>
                                <li className="nav_link"><a href="">Home</a></li>
                                <li className="nav_link"><a href="">About</a></li>
                                <li className="nav_link"><a href="">Services</a></li>
                                <li className="nav_link"><a href="">Articles</a></li>
                                <li className="nav_link"><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.nav_right}>
                        <p>Cart(0)</p>
                        <button className='btn'>Get a free quote</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar