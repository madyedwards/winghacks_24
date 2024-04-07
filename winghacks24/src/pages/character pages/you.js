import '../characters.css';
import { Button } from '../../components/button/Button';
import React from 'react';
import { Link } from 'react-router-dom';

function You() {
    
    return (
        <>
        <div className='container'>
            <div className='character-container'>
                <h1>YET TO UNLOCK</h1>
                
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

                <div className='container-mini' >
                    <h1> What's this? </h1>
                    <p>Seems you have yet to unlock this character....</p>
                    <p>

                    </p>
                    <p>
                        And that's because its you! Whether it be mathematics, physics, or perhaps even computer science, don't let anything stop you from pursuing your interests! One day, you might be on this list as well!
                    </p>
                </div>
            
            
        </div>
    </>
    );
};

export default You