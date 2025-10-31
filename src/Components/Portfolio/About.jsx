import "../style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import resume from "../Portfolio/Resume/Akshit Verma.pdf";

const About = () => {

    return (
        <div id="about">
            <h2 className="mb-4">About Me</h2>
            <div className="about">
                <span className="desc">
                    I am a Fresher Computer Science graduate student and passionate about Web Development.
                    I am enthuasists in the field of Full-Stack Development using React.js, Node.js, Express.js and Java Spring Boot with MySQL database.
                    My key areas of interest are like Front-End Web Development , Backend Development with Databases.
                </span>
            </div>
            <button className="resume"><a href={resume} download>Download Resume</a></button>
        </div>
    )
}

export default About;