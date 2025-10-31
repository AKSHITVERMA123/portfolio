import github from "../../assets/githubimage1.png";
import linkedIn from "../../assets/l.png";
import gmail from "../../assets/Gmail.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect, useMemo, useRef, useState } from "react";
import "../style.css";
import axios from "axios";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const btnref = useRef();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const RequiredData = () => {
        for (let i = 0; i < 3; i++) {
            var e = document.getElementsByClassName("FormDetail")[i];
            if (e) {
                e.style.fontWeight = "bold";
            }
            e = document.getElementsByClassName("FormDetail")[i];
            if (e) {
                var str = e.textContent;
                var n = str.length - 1;
                for (let j = 0; j < str.length; j++) {
                    if (str[j] !== '(') {
                        var modified = str.substring(0, n - 2).concat('(') +
                            `<span class="sym">*</span>` + ')';
                    }
                }
                e.innerHTML = modified;
            }
        }
    }
    useMemo(() => {
        let Name = document.getElementById("Name");
        let Email = document.getElementById("Email");
        let Message = document.getElementById("Message");
        if (Name != null) {
            localStorage.setItem("Name", Name.value);
        }
        if (Name && Name.value === "") {
            Name.focus();
        } else
            if (Email && Email.value === "") {
                console.log(localStorage.getItem("Name"));
                Email.focus();
            } else
                if (Message && Message.value === "") {
                    Message.focus();
                }
    }, []);

    useEffect(() => {
        RequiredData()
    }, []);

    const changecolor = () => {
        btnref.current.style.boxShadow = "0 5px 35px teal";
        setTimeout(() => {
            let btn = document.querySelector("#ClickMessage");
            btn.addEventListener("mouseout",
                () => {
                    btnref.current.style.boxShadow = "none";
                })
        }, 0);
    }

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            let d = document.getElementsByClassName("input")[i];
            if (d != null) {
                d.className = "bg-gray";
                d.style.border = "2px solid #777";
                d.style.borderRadius = "5%";
            }
        }
    });

    let msg, id = 0;
    const msgSent = () => {
        let input = [document.getElementById("Name"), document.getElementById("Email"), document.getElementById("Message")];
        if (input) {
            if ((input[0].value !== "" && input[1].value !== "" && input[2].value !== "") && validate(input) === true) {
                msg = "Message sent Successfully !";
            }
            else if (input[0].value === "") {
                msg = `${input[0].id} field cannot be empty`;
            }
            else if (input[1].value === "") {
                msg = `${input[1].id} field cannot be empty`;
            }
            else if (input[2].value === "") {
                msg = `${input[2].id} field cannot be empty`;
            }
            else if (validate(input) === false) {
                if (id === 1) {
                    msg = "Email is Not Valid, please give a valid Email !";
                }
                else {
                    msg = "UserName is not Valid, please give a valid UserName !";
                }
            }
            const voice = new SpeechSynthesisUtterance(msg);
            window.speechSynthesis.speak(voice);
            alert(msg);
        }
    }

    const validate = (input) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[A-Za-z0-9]+@[a-z]{5}\.[a-z]{3}$/;
        if (emailRegex.test(input[1].value) && nameRegex.test(input[0].value)) {
            return true;
        }
        else if (nameRegex.test(input[0].value) === false) {
            id = 0;
        }
        else if (emailRegex.test(input[1].value) === false) {
            id = 1;
        }
        return false;
    }

    const MNo = () => {
        return "+91 9027849902";
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById("Name").value;
        const email = document.getElementById("Email").value;
        const message = document.getElementById("Message").value;
        if (!name || !email || !message) {
            alert("Please enter both Name and Email!");
            return;
        }
        try {
            if (msg === "Message sent Successfully !") {
                axios.post("http://localhost:4000/User", { name, email, message });
                document.getElementById("Name").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Message").value = "";
            }
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Error saving data. Check console.");
        }
    }

    return (
        <div id="contact">

            <h2 className="my-2">Contact</h2>
            <h5>Contact Me on
                <span className="Contact-No"> {MNo()}</span>
            </h5>
            <form className="Contact-form d-flex flex-column bg-dark m-auto gap-4" id="form" onSubmit={handleSubmit}>
                <div className="form mt-4 d-flex justify-content-center column-gap-5" onClick={focus()} autoComplete="on">
                    <label className="FormDetail" name="name">Enter Your Namee: </label>
                    <input type="text" id="Name" name="Name" className="input" placeholder="John Doe" onChange={handleChange} required />
                </div>
                <div className="form my-3 d-flex justify-content-center column-gap-5" autoComplete="on">
                    <label className="FormDetail" name="email">Enter Your Emaill: </label>
                    <input type="email" id="Email" name="Email" className="input" placeholder="John Doe@gmail.com" onChange={handleChange} required />
                </div>
                <div className="form me-1 mt-0 mb-1 d-flex justify-content-center column-gap-4" autoComplete="on">
                    <label className="FormDetail" name="message">Enter Your Messagee: </label>
                    <textarea type="text" id="Message" name="Message" className="input" placeholder="Write Your Message" onChange={handleChange} required />
                </div>
                <button id="ClickMessage" type="submit" className="sm bg-success text-light mt-3 m-auto" ref={btnref} onMouseOver={changecolor} onClick={msgSent}>Send Message</button>
            </form>
            <footer className="footer bg-black pt-4 mt-5">
                <div className="footer_content">
                    <span className="quick_links fw-bold">Quick Links</span>
                    <div className="d-flex flex-column align-items-center">
                        <a href="#" id="Home">Home</a>
                        <a href="#about" id="About">About</a>
                        <a href="#skills" id="About">Skills</a>
                        <a href="#projects" id="Projects">Projects</a>
                        <a href="#contact" id="Contacts">Contact</a>
                    </div>
                </div>
                <div className="address">
                    <div>Address: </div>
                    <div>Jalalabad Distt - Shahjahanpur</div>
                    <div>Uttar Pradesh, India, 242221</div>
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <span className="d-flex justify-content-start px-4">Connect with me on</span>
                        <div className="d-flex justify-content-start gap-2">
                            <a href="https://github.com/akshitverma123"><img src={github} alt="Github" className="github" id="github"></img></a>
                            <a href="https://www.linkedin.com/in/akshitverma1"><img src={linkedIn} alt="LinkedIn" className="linkedin"></img></a>
                            <a href="https://gmail.com/"><img src={gmail} alt="Email" className="gmail"></img></a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <span>
                        Copyright © &nbsp;
                        All right reserved. 2025
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Contact;