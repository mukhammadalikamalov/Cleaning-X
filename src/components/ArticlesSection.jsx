import React from 'react'
import style from './ArticleSection.module.css';

function ArticlesSection() {
  return (
    <section id={style.article}>
        <div className="container">
            <div className={style.article__title}>
                <div className={style.title__left}>
                    <h1>Articles & resources</h1>
                </div>
                <div className={style.title__right}>
                    <button className='btn'>Get a free quote</button>
                    <button className={style.title__btn}>Browse articles</button>
                </div>
            </div>
            <div className={style.article}>
                <div className={style.card}>
                    <div className={style.card__info}>
                        <h4>8 best vacuum cleaners to clean any mess for your home in 2022</h4>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <div className={style.card__bottom}>
                            <p>Jan 28, 2022</p>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className={style.secondCard}>
                    <div className={style.card__info}>
                        <h4>How to properly disinfect your phone and other electronics</h4>
                        <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                        <div className={style.card__bottom}>
                            <p>Feb 1, 2022</p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticlesSection