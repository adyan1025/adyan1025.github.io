import photo from './assets/linkedin_transparent.png'

function Left_Box() {
    return (
        <div className = "left_box">
            <img src = {photo} className = "linkedin"></img>
            <h1 class="slide-in-bck-center" className = "name"><b>Adyan C.</b></h1>
            <p className = "subtext">
            Temple University Honors • College of Science and Technology • Computer Science • 19 years old • Programmer • UTC-5:00 
            </p>
        </div>
    );
}

export default Left_Box