import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div id={'Contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>

                <form action="#" method="post" className={style.contactsForm}>
                    <input className={style.input} type="email" name="email" id="email" placeholder="E-mail"/>
                    <input className={style.input} type="tel" name="tel" id="tel" placeholder="Phone"/>
                    <textarea className={style.textarea} name="message" id="message"
    placeholder="Message"/>
                    <button>Send message</button>
                </form>

            </div>
        </div>
    );
};
