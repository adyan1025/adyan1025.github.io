import Card from "./Card";
import pdf from './assets/resume.pdf'

function Right_Box() {
    return (
        <div className='right_box'>   
            <Card
                title={'About Me'}
                body={<div>Hi! My name is Adyan Chowdhury. I am a Bengali American who is currently
                    studying Computer Science at Temple University's College of Science and Technology.</div>}
            />
            <Card
                title={'Skills'}
                body={<div>I am familiar with C, HTMl, CSS, Javascript and Python. I love learning and I am actively picking up new skills all the time.</div>}
            />
            <Card
                title={'Projects'}
                body={<div>You can find most projects listed on my résumé or on my Github. Feel free to check them out!</div>}
            />
            <Card
                title={'Links'}
                body= {<div>Here are a few links for you to check out!<ul><i class="fa-brands fa-github"></i><a href="https://github.com/adyan1025" target="_blank" rel="noopener noreferrer" className="links"> Github</a><br/><i class="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/adyan-chowdhury/" target="_blank" rel="noopener noreferrer" className="links"> LinkedIn</a><br/><i class="fa-solid fa-envelope"></i><a href="mailto:chowdhuryadyan13@gmail.com" className="links"> Email</a><br/><i class="fa-solid fa-file"></i><a href={pdf} target="_blank" rel="noopener noreferrer" className="links"> Resume</a></ul></div>}
            />
        </div>
    );
}

export default Right_Box