import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './character_mini.css'
import adaImg from '../pictures/ada.PNG'


function Ada() {
    
    return (
    <>
        <div className='container'>
            <div className='character-container'>
                <h1>Ada Lovelace</h1>
                
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
            <div className='container-mini'>
                <h1>Ada Lovelace | The First Programmer</h1>
                <p>&gt;Born: December 10, 1815</p>
                <p>&gt;Died: November 27, 1852</p>
                <p>&gt;Title: The First Programmer | Mathematician</p>
                <p>&gt;Notable Information: 
                Created a program for the first prototype of a digital computer and is considered the first programmer.</p>

                <img className='img-locate' src={adaImg} alt='Ada Lovelace' width={'30%'}/>
            </div>
        </div>
    </>
    );
};

export default Ada