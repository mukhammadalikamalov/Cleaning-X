import React from 'react';
import style from './Footer.module.css';
import './Button.css';
import Logo from '../assets/IMAGE.png'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className={style.footer__top}>
                <div className={style.footer__item}>
                    <h1>Quality cleaning for your home</h1>
                    <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                    <div className={style.footer__blocks}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={style.footer__item}>
                    <h2>Contact Us</h2>
                    <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                    <p>(414) 567 - 2109</p>
                    <p>contact@cleaning.com</p>
                </div>
                <div className={style.footer__item}>
                    <h2>Hours</h2>
                    <h3>Monday to Friday</h3>
                    <p>6:00 AM - 9:00 PM</p>
                    <h3>Saturday & Sunday</h3>
                    <p>8:00 AM - 8:00 PM</p>
                </div>
                <div className={style.footer__item}>
                    <h2>Get a free estimate</h2>
                    <h3>(414) 567 - 2109</h3>
                    <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                    <button className='btn'>Request a free quote</button>
                </div>
            </div>
            <div className={style.footer__bottom}>
                <div className="footer__left">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer__right">
                    <p>Copyright © Cleaning X | Designed byBRIX Templates- Powered byWebflow-Licenses</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer