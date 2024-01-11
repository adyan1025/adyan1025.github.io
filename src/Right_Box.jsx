import Card from "./Card";
import pdf from './assets/resume.pdf'

function Right_Box() {
    return (
        <div className='right_box'>   
            <Card
                title={'About Me'}
                body={<div>Hi! My name is Adyan Chowdhury. I am a Bengali American who is currently
                    studying Computer Science at Temple University's College of Science and Technology. 
                    <br/><br/>I was born in Philly and grew up in the Upper Merion Township with both my parents
                    coming from Bangladesh. I grew up in a Muslim household alongside my older sister. 
                    <br/><br/>One of my pastimes would be playing videogames! I grew up in the generation revolving 
                    the likes of Minecraft and such. However, my favorite game would have to be "UnderTale". This game in 
                    particular inspired me to become a programmer. 
                    <br/><br/>Another hobby I have would be creative writing! I have written numerous works in my free time 
                    —including poems, stories, and other works of fiction. To that end, I have a future aspiration that would 
                    involve combining my creating writing prowess with programming. Hopefully I am able to see that through!</div>}
            />
            <Card
                title={'Skills'}
                body={<div>I am familiar with C, HTML, CSS, Javascript and Python. I love learning and I 
                    am actively picking up new skills. <br/><br/>Currently, I am in the process of mastering Java as my 
                    latest programming language. Additionally, I engage in hands-on projects using Godot's Game Engine, 
                    exploring the realm of game development as a side pursuit.</div>}
            />
            <Card
                title={'Projects'}
                body={<div>You can find all projects on my Github and my most notable ones on my résumé. Feel free to check them out!</div>}
            />
            <Card
                title={'Links'}
                body= {<div>Here are a few links for you to check out!<ul><i class="fa-brands fa-github"></i><a href="https://github.com/adyan1025" target="_blank" rel="noopener noreferrer" className="links"> Github</a><br/><i class="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/adyan-chowdhury/" target="_blank" rel="noopener noreferrer" className="links"> LinkedIn</a><br/><i class="fa-solid fa-envelope"></i><a href="mailto:chowdhuryadyan13@gmail.com" className="links"> Email</a><br/><i class="fa-solid fa-file"></i><a href={pdf} target="_blank" rel="noopener noreferrer" className="links"> Resume</a></ul></div>}
            />
        </div>
    );
}

export default Right_Box