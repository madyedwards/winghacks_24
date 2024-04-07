import './characters.css';
import { Button } from '../components/button/Button'
import React from 'react';
import { Link } from 'react-router-dom';
import gg from './pictures/gg.png'


function Characters() {
   
    return (
    <>
    <div className='container'>
        <div className='character-container'>
            <h1>CHOOSE YOUR FIGHTER!</h1>
            
            <Link to='/ada'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Ada Lovelace</Button>
            </Link>

            <Link to='/chien'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Chien-Shiung Wu</Button>
            </Link>

            <Link to='/dorothy'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Dorothy Vaughan</Button>
            </Link>
            
            <Link to='/lynn'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Lynn Conway</Button>
            </Link>

            <Button buttonStyle='btn--primary' buttonSize='btn--large1'>LOCKED SECRET</Button>
        </div>
        <div>
            <img className='img' src={gg} alt='The Women in STEM' width={'48%'}/>
        </div>
    </div>
    </>
    
    );
};

export default Characters