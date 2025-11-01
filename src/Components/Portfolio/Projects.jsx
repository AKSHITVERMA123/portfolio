import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../style.css";
import tiagocar from "../../assets/TATATiagoCarImage.jpg";
import python from "../../assets/Python.png";
import stopwatch from "../../assets/StopWatchClock.png";
import TodoApp from "../../assets/TodoList.png";
import TicTacToe from "../../assets/TicTacToe.png";
import SPT from "../../assets/SPT.png";
import { Link } from "react-router-dom";    
import { useState } from "react";

const Projects = () => {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    let pro1 = document.getElementsByClassName("pro1")[0];
    let pro2 = document.getElementsByClassName("pro2")[0];
    let pro3 = document.getElementsByClassName("pro3")[0];
    let pro4 = document.getElementsByClassName("pro4")[0];
    let pro5 = document.getElementsByClassName("pro5")[0];
    let pro6 = document.getElementsByClassName("pro6")[0];
    if (pro1 !== undefined) {
        pro1.addEventListener("mouseover", () => {

            pro1.style.transform = isHovered1 ? "scaleX(-1)" : "scale(-1)";
        });
    } else
        if (pro2 !== undefined) {
            pro2.addEventListener("mouseover", () => {

                pro2.style.transform = isHovered2 ? "scaleX(-1)" : "scale(-1)";
            });
        } else
            if (pro3 !== undefined) {
                pro3.addEventListener("mouseover", () => {

                    pro3.style.transform = isHovered3 ? "scaleX(-1)" : "scale(-1)";
                });
            } else
                if (pro4 !== undefined) {
                    pro4.addEventListener("mouseover", () => {

                        pro4.style.transform = isHovered4 ? "scaleX(-1)" : "scale(-1)";
                    });
                } else
                    if (pro5 !== undefined) {
                        pro5.addEventListener("mouseover", () => {

                            pro5.style.transform = isHovered5 ? "scaleX(-1)" : "scale(-1)";
                        });
                    } else
                        if (pro6 !== undefined) {
                            pro6.addEventListener("mouseover", () => {

                                pro6.style.transform = isHovered6 ? "scaleX(-1)" : "scale(-1)";
                            });
                        }

    return (
        <div id="projects">
            <h2 className="mb-5 mt-4">Projects</h2>
            <div className="pro">
                <div className="p">
                    <div className="pro1 border border-2 border-primary" onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}
                        style={{
                            backgroundColor: isHovered1 ? "#8cf07fff" : "#5eb1b1ff",
                            color: isHovered1 ? "#000" : "#fff",
                            transition: "all 0.5s ease",
                            transform: isHovered1 ? "scaleX(-1)" : "scale(1)"
                        }}>
                        {!isHovered1 ? (
                            <img src={tiagocar} className="w-100 h-100 rounded-4 my-0"></img>
                        ) :
                            (
                                <div className="innerdiv">
                                    <h5 className="heading">Car Searching and Compare App</h5>
                                    <span>It is Car search and compare project, which compares the car based on some attributes and predict which car the user should buy that is built with technologies like React.js, Java, MySQL. </span>
                                    <Link to="#" className="seeProj">See Live Demo</Link>
                                </div>
                            )
                        }
                    </div>
                    <div className="pro2 border border-2 border-primary" onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}
                        style={{
                            backgroundColor: isHovered2 ? "#8cf07fff" : "#5eb1b1ff",
                            color: isHovered2 ? "#000" : "#fff",
                            transition: "all 0.5s ease",
                            transform: isHovered2 ? "scaleX(-1)" : "scale(1)"
                        }}>
                        {!isHovered2 ? (
                            <img src={python} className="w-100 h-100 rounded-4 my-0"></img>
                        ) :
                            (
                                <div className="innerdiv">
                                    <h5 className="heading">House Price Prediction</h5>
                                    <span>It is a python project which describes and predicts the best House price based on some attributes like Room, tax, industry. that is built with techonologies like Python pandas library, NumPy etc. </span>
                                    <Link to="#" className="seeProj">See Live Demo</Link>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="p">
                    <div className="pro3 border border-2 border-primary" onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}
                        style={{
                            backgroundColor: isHovered3 ? "#8cf07fff" : "#5eb1b1ff",
                            color: isHovered3 ? "#000" : "#fff",
                            transition: "all 0.5s ease",
                            transform: isHovered3 ? "scaleX(-1)" : "scale(1)"
                        }}>
                        {!isHovered3 ? (
                            <img src={stopwatch} className="w-100 h-100 rounded-4 my-0"></img>
                        ) :
                            (
                                <div className="innerdiv">
                                    <h5 className="heading">StopWatch Timer</h5>
                                    <span>The Stopwatch project is a simple yet functional web-based application that allows users to track elapsed time with precision. It features basic controls such as Start, Stop, Reset.
                                    </span>
                                    <Link to="https://stopwatch-clock-01.vercel.app/" className="seeProj" target="_blank">See Live Demo</Link>
                                </div>
                            )
                        }
                    </div>
                    <div className="pro4 border border-2 border-primary" onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}
                        style={{
                            backgroundColor: isHovered4 ? "#8cf07fff" : "#5eb1b1ff",
                            color: isHovered4 ? "#000" : "#fff",
                            transition: "all 0.5s ease",
                            transform: isHovered4 ? "scaleX(-1)" : "scale(1)"
                        }}>
                        {!isHovered4 ? (
                            <img src={TodoApp} className="w-100 h-100 rounded-4 my-0"></img>
                        ) :
                            (
                                <div className="innerdiv">
                                    <h5 className="heading">To Do List App</h5>
                                    <span>It is a simple Todo list project made by Next.js framework which performs Add and Remove operations on different todos and shows the list of all Todos when finished todos, removed from the list.
                                    </span>
                                    <Link to="#" className="seeProj">See Live Demo</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="p">
                    <div className="pro5 border border-2 border-primary" onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)}
                        style={{
                            backgroundColor: isHovered5 ? "#8cf07fff" : "#5eb1b1ff",
                            color: isHovered5 ? "#000" : "#fff",
                            transition: "all 0.5s ease",
                            transform: isHovered5 ? "scaleX(-1)" : "scale(1)"
                        }}>
                        {!isHovered5 ? (
                            <img src={SPT} className="w-100 h-100 rounded-4 my-0"></img>
                        ) :
                            (
                                <div className="innerdiv">
                                    <h5 className="heading">Simple Portfolio Tracker</h5>
                                    <span>It is a JavaScript project which shows us a portfolio dashboard of purchasing items from Store.
                                    </span>
                                    <Link to="https://rwwplm-5173.csb.app/" className="seeProj">See Live Demo</Link>
                                </div>
                            )
                        }
                    </div>
                    <div className="pro6 border border-2 border-primary" onMouseEnter={() => setIsHovered6(true)} onMouseLeave={() => setIsHovered6(false)}
                        style={{
                            backgroundColor: isHovered6 ? "#8cf07fff" : "#5eb1b1ff",
                            color: isHovered6 ? "#000" : "#fff",
                            transition: "all 0.5s ease",
                            transform: isHovered6 ? "scaleX(-1)" : "scale(1)"
                        }}>
                        {!isHovered6 ? (
                            <img src={TicTacToe} className="w-100 h-100 rounded-4 my-0"></img>
                        ) :
                            (
                                <div className="innerdiv">
                                    <h5 className="heading">Tic Tac Toe Game</h5>
                                    <span>It is a simple Tic Tac Toe Game project made by Next.js framework which is played between 2 player (0 and X).
                                    </span>
                                    <Link to="/" className="seeProj">See Live Demo</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Projects;