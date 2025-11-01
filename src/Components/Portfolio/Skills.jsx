import "../style.css";
import html from "../../assets/HTML.png";
import css from "../../assets/CSS.png";
import js from "../../assets/JavaScript.jpg";
import React from "../../assets/React.js.png";
import angular from "../../assets/Angular.js.png";
import Node from "../../assets/Node.js.png";
import Express from "../../assets/Expressjs.png";
import SpringBoot from "../../assets/spring-boot-logo.png";
import mysql from "../../assets/MySQL.png";
import next from "../../assets/Next.js.png";
import tailwind from "../../assets/TailwindCSS.png";
import bootstrap from "../../assets/BootstrapCSS.png";
import MongoDB from "../../assets/MongoDB.png";
import github from "../../assets/githubimage1.png";
import { useState } from "react";

const Skills = (n) => {

  const [data, setData] = useState(false);

  let v;
  if (n.name === "HTML5") {
    v = html;
  }
  if (n.name === "CSS3") {
    v = css;
  }
  if (n.name === "JavaScript") {
    v = js;
  }
  if (n.name === "React.js") {
    v = React;
  }
  if (n.name === "Node.js") {
    v = Node;
  }
  if (n.name === "Express.js") {
    v = Express;
  }
  if (n.name === "Spring Boot") {
    v = SpringBoot;
  }
  if (n.name === "MySQL") {
    v = mysql;
  }
  if (n.name === "Next.js") {
    v = next;
  }
  if (n.name === "TailwindCSS") {
    v = tailwind;
  }
  if (n.name === "Angular.js") {
    v = angular;
  }
  if (n.name === "BootStrap") {
    v = bootstrap;
  }
  if (n.name === "Github") {
    v = github;
  }
  if (n.name === "MongoDB") {
    v = MongoDB;
  }

  let div = document.createElement("div");
  function skillName(id, name) {
    let img;
    div.textContent = name;
    div.className = "sk";
    div.style.cursor = "pointer";
    div.style.background = "#14d363";
    div.style.opacity = "0.4";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.position = "relative";
    div.style.animation = "anim 1s ease 0.2s 1 forwards";
    div.setAttribute("id", id);
    setData(true);
    if (!data) {
      img = document.getElementById(id);
      if (img) {
        img.replaceWith(div);
      }
    }
    div.addEventListener("mouseout",
      () => refresh(div));
  }

  let img = `<img src=${v} class=${`img`} id=${n.id} name=${n.name}></img>`;
  const refresh = (div) => {
    div.style.position = "relative";
    div.style.animation = "anim 1s ease 0.2s 1 reverse";
    setTimeout(() => {
      div.style.visibility = "visible";
      document.getElementById(n.id).remove();
      document.getElementsByClassName("skills")[n.id - 1].innerHTML = img;
      document.getElementsByClassName("skills")[n.id - 1].onmouseover = () => skillName(n.id, n.name);
      document.getElementsByClassName("skills")[n.id - 1].onmouseout = () => refresh(div);
    }, 1000);
  }

  return (
    <div className="skills">
      <img src={v} className="img" id={n.id} name={n.name} onMouseOver={() => skillName(n.id, n.name)}></img>
    </div>
  )
}

export default Skills;