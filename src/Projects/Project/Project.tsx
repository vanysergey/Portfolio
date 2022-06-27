import React from 'react';
import style from './Project.module.css'
// import icon from '../../img/social-networks-idea-with-lightbulb.jpg'

type ProjectPropsType = {
    link: string
    title: string
    description: string

}

export const Project = (props: ProjectPropsType) => {

    return (
        <div className={style.projectBlock}>
            <div className={style.project}>
                <div className={style.iconBlock}>

                    {/*<img className={style.icon} src={icon} alt="icon"/>*/}

                    <button><a href={props.link}>See more</a></button>
                </div>
                {/*<button><a href={props.link}>See more</a></button>*/}
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>

            </div>

        </div>

    );
};

