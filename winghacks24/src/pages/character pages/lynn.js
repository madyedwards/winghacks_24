import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import lynnImg from '../pictures/lynn.PNG'

function Lynn() {
    
    return (
        <>
        <div className='container'>
            <div className='character-container'>
                <h1>Lynn Conway</h1>
                
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

                <Button buttonStyle='btn--primary' buttonSize='btn--large'>LOCKED SECRET</Button>
            </div>
            <div className='container-mini'>
                <h1>Lynn Conway | The Computer Scientist </h1>
                <p>&gt;Born: January 2, 1938</p>
                <p>&gt;Title: Computer Scientist | Electrical Engineer</p>
                <p>&gt;Notable Information: 
                Mead–Conway VLSI chip design</p>
                <p>revolution which restructured academic materials</p>
                <p>in computer science and electrical engineering education</p>
                <p>& is a transgender woman in STEM.</p>

                <img className='img-locate-lynn' src={lynnImg} alt='Lynn Conway' width={370}/>
            </div>
        </div>
    </>
    );
};

export default Lynn