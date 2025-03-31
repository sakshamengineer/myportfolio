import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Text() {
    return (
        <div className='container-txt'>
            <div className='text-left'>
                <div className="txt">
                    <h2 className='bottom-animate'>Hello It's Me</h2>
                    <h1 className='side-animate'>Saksham Gupta</h1>
                    <h2 className='bottom-animate'>And I'm a
                        <TypeAnimation
                            sequence={[
                                " Frontend Developer", 1500,
                                " Coder", 1500,
                                " Btech Student", 1500
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        /></h2>
                </div>
                <p className='side2-animate'>Passionate frontend developer and BTech 1st-year student, eager to craft visually stunning and user-friendly web experiences. Exploring HTML, CSS, JavaScript, and modern frameworks to build interactive and responsive designs. Constantly learning and growing in the world of web development!"</p>
                <div className="contact-links">
                    <a className="links" style={{'--i' : 6}} href='https://www.facebook.com/profile.php?id=100089469668800'  target="_blank" rel='noreferrer'><i className='bx bxl-facebook' style={{color:'#06dee9'}}  ></i></a>
                    <a className="links" style={{'--i' : 7}} href='https://github.com/sakshamengineer/'  target="_blank" rel='noreferrer'><i className='bx bxl-github' style={{color:'#06dee9'}}  ></i></a>
                    <a className="links" style={{'--i' : 8}} href='https://www.instagram.com/sakshamgupta9969/'  target="_blank" rel='noreferrer'><i className='bx bxl-instagram' style={{color:'#06dee9'}} ></i></a>
                    <a className="links" style={{'--i' : 9}} href='https://www.linkedin.com/in/saksham-gupta-80b952323/'  target="_blank" rel='noreferrer'><i className='bx bxl-linkedin' style={{color:'#06dee9'}} ></i></a>
                </div>
                <a href="https://drive.google.com/file/d/13Q-st_NEYgI9yhNVG6y8ZPKL5VJup99W/view?usp=sharing"  target="_blank" className='animate-btn' rel="noreferrer"><button>Download CV</button></a>
            </div>
            <div className="right">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFINjv5LzdJTA/profile-displayphoto-shrink_400_400/B4DZXiAjmjHAAg-/0/1743253552286?e=1748476800&v=beta&t=CIyiI_h3ZPLuKT2hZn82iZn95qtKN7KPg9jGGZCOi44" alt="my img" />
            </div>
        </div>
    )
}
