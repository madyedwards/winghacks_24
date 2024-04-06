import './characters.css';
import { Button } from '../components/button/Button'
import Credit1 from './pictures/shiyin.png'
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Characters() {
    
    const [imageURL, setImage] = useState(null);

    const loadNewIMG = (newImgURL) => {
        const newImg = {newImgURL};
        setImage(newImg);
    };

    return (
    <div className='character-container'>
        <h1>CHOOSE YOUR FIGHTER!</h1>
        
        <div className='div-indent'></div>
            <Link to='/ada'>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Ada Lovelace</Button>
            </Link>
        

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