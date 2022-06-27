import React from 'react';
import style from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
    icon: any
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}><img className={style.img} src={props.icon} alt=""/></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>

        </div>
    );
};

