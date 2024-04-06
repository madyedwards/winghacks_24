import React from "react";
import "./hero.css"
import { Button } from "../button/Button";

function Hero() {

return (
    
    <div className="hero-container">
        <h1>Welcome!</h1>
        <p>
            As Women in STEM, we feel it is important for us to recognize those who have paved the way before us. 
            Their contributions towards their respective fields are invaluable, and their impact is nothing short of significant.
            Click to learn more about our history!
        </p>
        <Button buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
            Characters
            </Button>
    </div>

)
   
}
export default Hero;