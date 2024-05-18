import React from 'react'
import style from './AdSection.module.css';
import phoneIcon from '../assets/IMAGE (2).png'
import './Button.css'

function AdSection() {
    return (
        <section id={style.ad}>
            <div className="container">
                <div className={style.ad}>
                    <div className={style.ad__left}>

                    </div>
                    <div className={style.ad__right}>
                        <h4>Covid-19 sanitization</h4>
                        <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
                        <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                        <div className={style.ad__btns}>
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
                </div>
            </div>
        </section>
    )
}

export default AdSection