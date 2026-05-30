import '../styling/Intro.css'
import AdyanPhoto from '../assets/landing-pic.png'
import RedUnderline from '../assets/red-underline.png'

function Intro() {
    return(
        <div className="intro">
            <div className='intro-text'>
                <header>
                    <div className='h1-with-underline'>
                        <h1>adyan chowdhury</h1>
                        <img src={RedUnderline} alt="Red Underline" />
                    </div>
                    <h2>computer science • undergrad student • cloud engineer</h2>
                </header>
                <h3>I am a current 4th year undergraduate student studying at Temple University majoring in computer science and minoring in data science. My work included full-stack application, dev-ops, machine learning, artificial intelligence, and cloud infrastructure.</h3>
            </div>
            <div className='intro-image'>
                <img src={AdyanPhoto} alt="Adyan Chowdhury" />
            </div>
        </div>
    );
}
export default Intro;