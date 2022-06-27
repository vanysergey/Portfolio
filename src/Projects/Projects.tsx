import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './Project/Project';


export const Projects = () => {

    return (
        <div id={'Projects'} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2>Project</h2>
                <div className={style.projects}>
                    <Project

                        link={'https://vanysergey.github.io/social_network/'}
                        title={'Social network'}
                        description={'Social networking is the use of a website or app to connect to friends, family and those who share your interests.'}
                    />
                    <Project

                        link={'https://vanysergey.github.io/social_network/'}
                        title={'Social network'}
                        description={'Social networking is the use of a website or app to connect to friends, family and those who share your interests.'}
                    />
                </div>
            </div>
        </div>
    );
};

