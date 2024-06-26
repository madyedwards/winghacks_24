import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './character_mini.css'
import adaImg from '../pictures/ada.PNG'
import adaPFP from '../pictures/adaPFP.png'


function Ada() {
    
    return (
    <>
        <div className='container'>
            <div className='character-container'>
                <img className='imgPFP' src={adaPFP} alt='Ada Lovelace' width={'70%'}/>
                
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

                <Link to='/secret'>
                   <Button buttonStyle='btn--primary' buttonSize='btn--large1'>LOCKED SECRET</Button>
                </Link>
            </div>
            <div className='container-mini'>
                <h1>Ada Lovelace | The First Programmer</h1>
                <p>&gt;Born: December 10, 1815</p>
                <p>&gt;Died: November 27, 1852</p>
                <p>&gt;Title: The First Programmer | Mathematician</p>
                <p>&gt;Notable Information: 
                Created a program for the first prototype of a digital computer and is considered the first programmer.</p>
                <p>Her work is considered the earliest forms of modern computers to date, predating the modern equivalent by nearly a century.</p>

                <img className='img-locate' src={adaImg} alt='Ada Lovelace' width={'30%'}/>
            </div>
        </div>
    </>
    );
};

export default Ada