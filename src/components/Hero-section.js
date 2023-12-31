import Img from '../assets/imgs/navIcon.jpg';
export default function HeroSection() {
    return (
        <>
            <div className="conatiner">
                <div className="row">
                    <div className=" col-sm-12 col-lg-6 col-md-6">
                        <h1>Arif Hussain</h1>
                        <h3>Full Stack Developer</h3>
                        <p>Hi, I am a Full Stack Developer. I have 2 years of experience in developing
                            web applications using ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, HTML, CSS, Bootstrap, Material UI, JavaScript, jQuery, AJAX, JSON, REST API, Git, GitHub, Heroku, Netlify, and Firebase.
                        </p>
                    </div>
                    <div className=" col-sm-12 col-lg-6 col-md-6">
                        <img src={Img}  alt="Arif Hussain" className="img-fluid hero-img" />
                    </div>
                </div>
            </div>
        </>

    );

}

