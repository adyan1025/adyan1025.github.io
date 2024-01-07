import resume from './assets/resume.png'
import pdf from './assets/resume.pdf'

function Bottom_Box() {
    return (
        <div className="bottom_box">
            <h1 className='resume_title'>Resume</h1>
            <a href={pdf} target='_blank'><img src={resume} className='resume_image'></img></a>
            <sub className='resume_description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, dolor atque. Adipisci perspiciatis iusto nemo consequatur culpa a incidunt delectus, debitis enim eveniet ab consequuntur? Atque beatae ratione blanditiis magni.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, dolor atque. Adipisci perspiciatis iusto nemo consequatur culpa a incidunt delectus, debitis enim eveniet ab consequuntur? Atque beatae ratione blanditiis magni.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, dolor atque. Adipisci perspiciatis iusto nemo consequatur culpa a incidunt delectus, debitis enim eveniet ab consequuntur? Atque beatae ratione blanditiis magni.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, dolor atque. Adipisci perspiciatis iusto nemo consequatur culpa a incidunt delectus, debitis enim eveniet ab consequuntur? Atque beatae ratione blanditiis magni.</sub>
        </div>
    );
}

export default Bottom_Box;