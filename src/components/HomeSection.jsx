import React from 'react'
import style from './HomeSection.module.css';
import './Button.css';
import phoneIcon from '../assets/IMAGE (2).png';

function HomeSection() {
  return (
    <section id={style.home}>
        <div className="container">
            <div className={style.home}>
                <div className={style.home__left}>
                    <h1>Quality cleaning for your home</h1>
                    <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className={style.home__info}>
                        <button className='btn'>Get a free quote</button>
                        <div className='call__btn'>
                            <img src={phoneIcon} alt="phone-icon" />
                            <div className="number__info">
                                <span>Call us now</span>
                                <p>(414) 567 - 2109</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__right">

                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection