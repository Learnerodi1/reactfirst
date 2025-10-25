import React,{Component} from "react";
import { ElementBody } from "./Body";
import firstImg from "./../images/f835294d-48d8-4212-b8a9-18d699af17ba.jpeg"
import SecondImg from "./../images/wallpaper7.jpg"

const About = (props) =>{
    return (
        <section id ="about">
            <ElementBody name ="About">
                <div className="aboutContainer">
                    <figure>
                        <img src={firstImg} alt="" />
                        <img id="middle" src={SecondImg} alt="" />
                        <img src={firstImg} alt="" />
                        <div></div>
                        <p>Learn</p>
                    </figure>
                    <article>
                        <span>Name : {props.name}. Date of Birth : {props.DOB}. Age : {props.age}. Skills : {props.skill}</span>
                        <code>THis user can Learn ANYTHIING</code>
                    </article>
                </div>
            </ElementBody>
        </section>
    )
}

export {About}
