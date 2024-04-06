import './characters.css';
import { Button } from '../components/button/Button'

function Characters() {
    return (
    <div className='character-container'>
        <h1>CHOOSE YOUR FIGHTER!</h1>
        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Ada Lovelace</Button>
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