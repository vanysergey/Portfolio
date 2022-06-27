import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href={'#Home'}>Home</a>
            <a href={'#Skills'}>Skills</a>
            <a href={'#Projects'}>Projects</a>
            <a href={'#Contacts'}>Contacts </a>
        </div>
    );
};

