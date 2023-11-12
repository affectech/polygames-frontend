import './App.scss'
import React from 'react'
import Header from './Header/Header';
import Home from '../views/Home/Home';

const App = () => {    
    return (
        <div className='app'>
            <Header />
            <Home />
        </div>
    );
};

export default App;