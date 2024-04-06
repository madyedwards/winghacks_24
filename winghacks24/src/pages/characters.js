import './characters.css';
import { Button } from '../components/button/Button'
import Credit1 from './pictures/shiyin.png'
import React, {useState} from 'react';


function Characters() {
    
    const [imageURL, setImage] = useState(null);

    const loadNewIMG = () => {
        const newImg = {Credit1};
        setImage(newImg);
    };

    return (
    <div className='character-container'>
        <h1>CHOOSE YOUR FIGHTER!</h1>
        
        <Button buttonStyle='btn--primary' buttonSize='btn--large' onClick={loadNewIMG}>Ada Lovelace</Button>
        {imageURL !== null && <img src={Credit1} alt="A rat" height={1000} width={1000} />}

        <div className='div-indent'></div>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Chien-Shiung Wu</Button>
        <div className='div-indent'></div>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Dorothy Vaughan</Button>
        <div className='div-indent'></div>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Lynn Conway</Button>
        <div className='div-indent'></div>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>SECRET LOCKED</Button>
    </div>
    );
};

export default Characters