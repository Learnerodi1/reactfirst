import React,{Component} from "react";
import { Socials } from "./Socials";

const newDate = new Date()
const date = newDate.getFullYear() 
const Footer = () =>{
    return (
        <footer id="footer">
            <p>&copy; PresntDayTech {date}</p>
            <Socials></Socials>
        </footer>
    )
}

export {Footer} 