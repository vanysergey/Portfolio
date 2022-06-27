import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {Projects} from './Projects/Projects';
import {Contacts} from './Contact/Contacts';
import {Footer} from './Footer/Footer';
import {RemoteWork} from './RemoteWork/RemoteWork';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
