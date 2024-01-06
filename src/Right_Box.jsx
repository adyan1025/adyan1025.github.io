import Card from "./Card";

function Right_Box() {
    return (
        <div className='right_box'>   
            <Card
                title={'About Me'}
                body={<div>Hi! My name is Adyan Chowdhury. I am a Bengali American who is currently
                    studying Computer Science at Temple University's College of Science and Technology.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque dolore 
                    exercitationem, ipsa laboriosam ducimus eveniet provident hic debitis dolorum enim. Ratione 
                    vero deleniti optio consectetur libero, voluptas nihil temporibus!.</div>}
            />
            <Card
                title={'Skills'}
                body={<div>Hi! My name is Adyan Chowdhury. I am a Bengali American who is currently
                    studying Computer Science at Temple University's College of Science and Technology.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque dolore 
                    exercitationem, ipsa laboriosam ducimus eveniet provident hic debitis dolorum enim. Ratione 
                    vero deleniti optio consectetur libero, voluptas nihil temporibus!.</div>}
            />
            <Card
                title={'Projects'}
                body={<div>Hi! My name is Adyan Chowdhury. I am a Bengali American who is currently
                    studying Computer Science at Temple University's College of Science and Technology.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur atque dolore 
                    exercitationem, ipsa laboriosam ducimus eveniet provident hic debitis dolorum enim. Ratione 
                    vero deleniti optio consectetur libero, voluptas nihil temporibus!.</div>}
            />
            <Card
                title={'Links'}
                body= {<div>I have a number of ways for you to contact me or view any of my works!<ul><i class="fa-brands fa-github"></i><a href="https://github.com/adyan1025" target="_blank" rel="noopener noreferrer" className="links"> Github</a><br/><i class="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/adyan-chowdhury/" target="_blank" rel="noopener noreferrer" className="links"> LinkedIn</a><br/><i class="fa-solid fa-envelope"></i><a href="mailto:chowdhuryadyan13@gmail.com" className="links"> Email</a></ul></div>}
            />
        </div>
    );
}

export default Right_Box