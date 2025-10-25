import React,{Component} from "react";
import { Nav } from "./Nav";
import mainlogo from "../images/mainlogo.png"
import { Socials } from "./Socials";


const ElementBody = (props) =>{
    return(
        <>
        <section className="mainBody">
            <figure id="status">
                <a href="/#"><img src={mainlogo} id="mainlogo"alt="logo" /></a>
                <h2>{props.name}</h2>
            </figure>
            <Nav/>
            <Socials/>
            <div className="designName">
                <span></span>
                <h2>Learner</h2>
                <span></span>
            </div>
            {props.children}
        </section>
        </>
    )
}

export {ElementBody}