import React from 'react'
import style from './ServicesSection.module.css';
import cardImage1 from '../assets/IMAGE (6).png';
import cardImage2 from '../assets/IMAGE (7).png';
import cardImage3 from '../assets/IMAGE (8).png';


function ServicesSection() {
    return (
        <section id={style.services}>
            <div className="container">
                <div className={style.services__title}>
                    <h1>Our Services</h1>
                    <button>
                        Explore Services
                    </button>
                </div>
                <div className={style.services__cards}>
                    <div className={style.card}>
                        <img src={cardImage1} alt="" />
                        <h4>House cleaning</h4>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className={style.card}>
                        <img src={cardImage2} alt="" />
                        <h4>Office cleaning</h4>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className={style.card}>
                        <img src={cardImage3} alt="" />
                        <h4>Industrial cleaning</h4>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection