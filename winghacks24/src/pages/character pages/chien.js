import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import wuImg from '../pictures/wu.PNG'

function Chien() {
    
    return (
        <>
        <div className='container'>
            <div className='character-container'>
                <h1>Chien-Shiung Wu</h1>
                
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
                <h1>Chien-Shiung Wu | The Physicist</h1>
                <p>&gt;Born: May 31st, 1912</p>
                <p>&gt;Died: February 16th, 1997</p>
                <p>&gt;Title: Physicist</p>
                <p>&gt;Notable Information: 
                Chinese physicist who studied at UC Berkeley. Instrumental to the Manhattan Project.</p>
                <p>Received the National Medal of Science in 1975 and was dubbed "The First Lady of Physics".</p>
                <p>
                Disproved the hypothetical law of conservation of parity.
                </p>

                <img className='img-locate-wu' src={wuImg} alt='Chien-Shiung Wu' width={'20%'}/>
            </div>
        </div>
    </>
    );
};

export default Chien