import resume from './assets/resume.png'
import pdf from './assets/resume.pdf'

function Bottom_Box() {
    return (
        <div className="bottom_box">
            <h1 className='resume_title'>Résumé</h1>
            <a href={pdf} target='_blank'><img src={resume} className='resume_image'></img></a>
            <sub className='resume_description'>Check out my résumé! It details my experience, projects, certifications, and skills. If you would like to hire me or work together, please contact me at this email: adyan.chowdhury@temple.edu. I look forward to working with you!</sub>
        </div>
    );
}

export default Bottom_Box;