import "../style.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import photo from "../../assets/Akshit Photo.jpeg";
import newPhoto from "../../assets/Akshit Verma.jpg";
import { useEffect, useMemo, useState } from "react";

const Portfolio = () => {

    const roles = useMemo(
        () => ["Full-Stack Developer", "Web Developer", "React.js Developer", "MERN Stack Developer", "Java Developer",],
        []
    );

    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);
    const [image, setImage] = useState(photo);

    useEffect(() => {
        const currentText = roles[roleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                setCurrentRole((prev) => currentText.substring(0, prev.length + 1));
                setSpeed(100);
                if (currentRole === currentText) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setCurrentRole((prev) => currentText.substring(0, prev.length - 1));
                setSpeed(75);
                if (currentRole === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        };
        const timer = setTimeout(handleTyping, speed);
        return () =>
            clearTimeout(timer);

    }, [currentRole, isDeleting, roleIndex, roles, speed]);


    const changeImage = () => {
        setTimeout(() => {
            document.getElementsByClassName("photo my-5")[0].style.mixBlendMode = "luminosity";
            document.getElementsByClassName("photo my-5")[0].style.boxShadow = "0 4px 55px rgba(30, 30, 31, 1)";
            document.getElementsByClassName("photo my-5")[0].style.objectPosition = "0 -97px";
        }, 100);
        setTimeout(() => {
            setImage(newPhoto);
            document.getElementsByClassName("photo my-5")[0].style.mixBlendMode = "luminosity";
            document.getElementsByClassName("photo my-5")[0].style.boxShadow = "0 4px 55px rgba(30, 30, 31, 1)";
            document.getElementsByClassName("photo my-5")[0].style.objectPosition = "-70px 0";
        }, 160);
        setTimeout(() => {
            document.getElementsByClassName("photo my-5")[0].style.boxShadow = "0 4px 55px rgba(55, 52, 218, 0.98)";
            document.getElementsByClassName("photo my-5")[0].style.mixBlendMode = "normal";
        }, 200);
    }

    const originalImage = () => {
        setTimeout(() => {
            document.getElementsByClassName("photo my-5")[0].style.boxShadow = "none";
            document.getElementsByClassName("photo my-5")[0].style.mixBlendMode = "luminosity";
        }, 100);
        setTimeout(() => {
            setImage(photo);
            document.getElementsByClassName("photo my-5")[0].style.objectPosition = "0 -97px";
            document.getElementsByClassName("photo my-5")[0].style.mixBlendMode = "luminosity";
        }, 160);
        setTimeout(() => {
            document.getElementsByClassName("photo my-5")[0].style.mixBlendMode = "normal";
        }, 200);
    }

    return (
        <div className="outer">
            <div className="main">
                <div className="links">
                    <div className="square">
                        <span className="navbar">
                            <a href="/pf">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="detail d-flex flex-column justify-content-center">
                <img src={image} className="photo my-5" onMouseOver={changeImage} onMouseOut={originalImage}></img>
                <span className="Desc"><span className="introduction">Hello, I&apos;m</span><h2>Akshit Verma</h2></span>
                <span className="Description">a passionate <span className="role">{currentRole}</span>
                </span><span className="intro_span px-5">with the proficiency of HTML, CSS , JavaScript, React.js , Node.js, Express.js and MongoDB.
                    In my free time, I like developing side projects and learning new technologies.</span>
            </div>
            <About />
            <h2 id="skills" className="skill mt-5 mb-3">Skills</h2>
            <div className="namedSkills cursor-pointer">
                <Skills id={1} name="HTML5"></Skills>
                <Skills id={2} name="CSS3"></Skills>
                <Skills id={3} name="JavaScript"></Skills>
                <Skills id={4} name="React.js"></Skills>
                <Skills id={5} name="Node.js"></Skills>
                <Skills id={6} name="Express.js"></Skills>
                <Skills id={7} name="Spring Boot"></Skills>
                <Skills id={8} name="MySQL"></Skills>
                <Skills id={9} name="Next.js"></Skills>
                <Skills id={10} name="TailwindCSS"></Skills>
                <Skills id={11} name="BootStrap"></Skills>
                <Skills id={12} name="Angular.js"></Skills>
                <Skills id={13} name="MongoDB"></Skills>
                <Skills id={14} name="Github"></Skills>
            </div>

            <Projects />
            <Contact />
        </div>
    )
}

export default Portfolio;