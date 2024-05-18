import React from 'react'
import style from './ContactUs.module.css';
import phoneIcon from '../assets/IMAGE (2).png';
import './Button.css';


function ContactUsSection() {
  return (
    <section id={style.contact}>
        <div className="container">
            <div className={style.contact}>
                <div className={style.contact__left}>
                    <h1>Contact Us</h1>
                    <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                    <div>
                        <div className='call__btn'>
                            <img src={phoneIcon} alt="phone-icon" />
                            <div className="number__info">
                                <span>Call us now</span>
                                <p>(414) 567 - 2109</p>
                            </div>
                        </div>
                    </div>
                    <h2>Not convinced yet?</h2>
                    <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                    <button>Browse our packages</button>
                </div>
                <div className={style.contact__right}>
                    <form className={style.form}>
                        <div className={style.form__top}>
                            <input type="text" placeholder='Full name' />
                            <input type="text" placeholder='Phone Number' />
                            <input type="text" placeholder='Address' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Requested service' />
                            <input type="text" placeholder='Day of service' />
                        </div>
                        <textarea placeholder='Add a note'></textarea>
                        <button className='btn' type='submit'>Submit message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUsSection