import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from '../RemoteWork/remoteWork.module.css';

export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <div className={style.remoteWork}>
                    <h2> I'm considering remote work</h2>
                    <button>To hire me</button>
                </div>
            </div>
        </div>
    );
};
