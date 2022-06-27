import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css';
import gmail from '../img/gmail-logo.svg'
import github from '../img/github_logo.svg'
import skype from '../img/skype.svg'
import linkedIn from '../img/linked.svg'

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3>Sergey Vaniukou</h3>
                <div className={style.social}>

                    <li><a href="https://github.com/vanysergey"><img className={style.logo} src={github} alt="github"/></a></li>
                    <li><a href="https://mail.google.com/"><img className={style.logo} src={gmail} alt="gmail"/></a></li>
                    <li><a href="https://www.skype.com"><img className={style.logo} src={skype} alt="skype"/></a></li>
                    <li><a href="https://www.linkedin.com/in/vany-sergey/"><img className={style.logo} src={linkedIn} alt="linkedIn"/></a></li>

                </div>
                <div>© 2022</div>
            </div>
        </div>
    );
};

