import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import dorImg from '../pictures/dorothy .PNG'

function Dorothy() {
    
    return (
        <>
        <div className='container'>
            <div className='character-container'>
                <h1>Dorothy Vaughan</h1>
                
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
                <h1>Dorothy Vaughan | The Mathematician </h1>
                <p>&gt;Born: September 20, 1910</p>
                <p>&gt;Died: November 10, 2008</p>
                <p>&gt;Title: NASA’s First African-American Manager | Mathematician</p>
                <p>&gt;Notable Information: 
                Head of the National Advisory Committee for Aeronautics’ (NACA’s) segregated West Area Computing Unit & NASA’s First African-American Manager</p>
                <p>Her work helped to further national aerospace goals from World War II to the Space Age.</p>
                <img className='img-locate-dor' src={dorImg} alt='Dorothy Vaughan' width={'14%'}/>
            </div>
        </div>
    </>
    );
};

export default Dorothy