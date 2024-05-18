import React from 'react'
import style from './AboutUsSection.module.css';
import cardImage1 from '../assets/IMAGE (3).png';
import cardImage2 from '../assets/IMAGE (4).png';
import cardImage3 from '../assets/IMAGE (5).png';

function AboutUsSection() {
    return (
        <section id={style.about}>
            <div className="container">
                <div className={style.about__title}>
                    <h1>About Us</h1>
                    <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                </div>
                <div className={style.about__cards}>
                    <div className={style.about__card}>
                        <div className={style.card__img}>
                            <img src={cardImage1} alt="" />
                        </div>
                        <div className={style.card__desc}>
                            <h4>1. Schedule online</h4>
                            <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                        </div>
                    </div>
                    <div className={style.about__card}>
                        <div className={style.card__img}>
                            <img src={cardImage2} alt="" />
                        </div>
                        <div className={style.card__desc}>
                            <h4>2. Pay online easily</h4>
                            <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
                        </div>
                    </div>
                    <div className={style.about__card}>
                        <div className={style.card__img}>
                            <img src={cardImage3} alt="" />
                        </div>
                        <div className={style.card__desc}>
                            <h4>3. Get your house cleaned</h4>
                            <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection