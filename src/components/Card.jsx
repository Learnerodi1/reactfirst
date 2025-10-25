import React,{Component} from "react"

const Card = (props) =>{
    return(
        <div className="card">
            <figure>
                <img src={props.imgLink} alt="" />
            </figure>
                <p>{props.name}</p>
        </div>
    )
}

export {Card}