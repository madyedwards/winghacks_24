import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';


function Ada() {
    
    return (
    <div className='character-container'>
        <h1>ada time</h1>
        
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

        <Button buttonStyle='btn--primary' buttonSize='btn--large'>SECRET LOCKED</Button>
    </div>
    );
};

export default Ada