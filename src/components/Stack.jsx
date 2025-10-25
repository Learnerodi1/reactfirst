import React,{Component} from "react";
import { ElementBody } from "./Body";
import {Card} from "./Card"
import gitlogo from "./../images/gitlogo.png"
import htmllogo from "./../images/htmllogo.png"
import reactlogo from "./../images/reactlogo.png"
import jslogo from "./../images/jslogo.jpg"
import csslogo from "./../images/csslogo.webp"

const Stack = () => {
    return (
        <section id="stack">
            <ElementBody name="stack">
                <div className="stackContainer">
                <h3>Stack</h3>
                    <Card name="HTML" imgLink ={htmllogo}></Card>
                    <Card name="CSS" imgLink={csslogo}></Card>
                    <Card name="JavaScript"imgLink={jslogo}></Card>
                    <Card name="React"imgLink={reactlogo}></Card>
                    <Card name="Git"imgLink={gitlogo}></Card>
                </div>
            </ElementBody>
        </section>
    )
}

export {Stack}