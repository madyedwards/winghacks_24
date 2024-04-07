import './credits.css'
import Credit1 from './pictures/shiyin.png'
import Credit2 from './pictures/madison.PNG'
import Credit3 from './pictures/hailey.PNG'

function Credits() {
    return (
    <>
    <div class='page-body'>
        <h1 class='title'>Our Team</h1>
        <div class='row'>

            <div class='column'>
                <div class='card'>
                    <div>
                        <h1 className='nameTag1'><span>Shiyin Hong</span></h1>
                        <img src={Credit1} alt="A rat" height={300} width={300} />
                        <p>Hi! I'm a second-year Computer Science major with a Digital Arts & 
                            Sciences minor at the University of Florida. I have an interest in 
                            UI/UX, and software engineering. This is my first hackathon!
                        </p>
                        <a href="https://www.linkedin.com/in/shiyin-hong/">LinkedIn</a>
                        <div></div>
                        <a href="https://github.com/shiishorts">GitHub</a>
                    </div>
                </div>
            </div>

            <div class='column'>
                <div class='card'>
                    <div>
                        <h1 className='nameTag2'><span>Madison Edwards</span></h1>
                        <img src={Credit2} alt="Another rat" height={300} width={300} />
                        <p>Hello! I am a third-year Computer Science major and Digital Arts and Science
                             minor studying at UF. I am currently interested in pursuing UI/UX design, 
                             game development, and software engineering.
                             I hope you enjoy the project we created!
                        </p>
                        <a href="https://www.linkedin.com/in/mady-e-16775427a/">LinkedIn</a>
                        <div></div>
                        <a href="https://github.com/madyedwards">GitHub</a>
                    </div>
                </div>
            </div>

            <div class='column'>
                <div class='card'>
                    <div>
                        <h1 className='nameTag3'><span>Hailey Pham</span></h1>
                        <img src={Credit3} alt="A third rat" height={300} width={300} />
                        <p>I'm a second-year computer science and digital arts dual major at the 
                            University of Florida. I enjoy playing and making games in my free time. 
                            This is my first hackathon!
                        </p>
                        <a href="https://www.linkedin.com/in/hailey-pham-2944a62a2/">LinkedIn</a>
                        <div></div>
                        <a href="https://github.com/hailey-pham">GitHub</a>
                        <div></div>
                        <a href="https://hitpoints.itch.io/">Itch.io</a>
                    </div>
                </div>
            </div>

        </div>
        <div class='row'>
            <div class='card2'>
                <div>
                    <h1 className='title'>References</h1>
                    <ul>
                        <li>https://www.britannica.com/biography/Ada-Lovelace</li>
                        <li>https://en.wikipedia.org/wiki/Chien-Shiung_Wu</li>
                        <li>https://www.nasa.gov/people/dorothy-vaughan/</li>
                        <li>https://en.wikipedia.org/wiki/Kathleen_Booth</li>
                    </ul>

                    <ul>
                        <li>https://www.youtube.com/watch?v=I2UBjN5ER4s&t=4093s&ab_channel=BrianDesign</li>
                        <li>https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom</li>
                        <li>https://www.codevertiser.com/reactjs-responsive-navbar/</li>
                        <li>https://blog.logrocket.com/create-responsive-navbar-react-css/</li>
                        <li>https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_column_cards</li>
                        <li>https://builtin.com/software-engineering-perspectives/react-js-image</li>
                        <li>https://stackoverflow.com/questions/9913293/change-text-on-hover-then-return-to-the-previous-text</li>

                    </ul>

                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Credits

/*
function Credits() {
    return (
    <>
        <div class='card'>
            <div class='container'>
            <p>Welcome to Credits</p>
            </div>
        </div>

        <div class='card'>
            <div class='container'>
            <p>Welcome to Credits</p>
            </div>
        </div>
    </>
    );
};

export default Credits
*/