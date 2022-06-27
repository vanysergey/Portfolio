import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import css from '../img/css3-02_icon.png'
import js from '../img/js_logo.png'
import react from '../img/react_original.png'


export const Skills = () => {
    return (
        <div  id={'Skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill
                        icon={css}
                        title={'CSS'}
                        description={'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed'}
                    />
                    <Skill
                        icon={js}
                        title={'JS'}
                           description={'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.'}/>
                    <Skill
                        icon={react}
                        title={'React'}
                           description={'React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components'}/>
                </div>
            </div>
        </div>
    );
};

