import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import photo from '../img/4G1A8404.jpg'


export const Main = () => {
    return (
        <div id={'Home'} className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am Sergey Vaniukou</h1>
                <p>Frontend Developer</p>
            </div>

            <div className={style.photo}><img src={photo} height='400px' alt="my_photo"/>
               </div>
            </div>
        </div>
    );
};

