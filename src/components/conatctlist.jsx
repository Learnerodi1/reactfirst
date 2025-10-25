import React,{Componenet} from "react";

const ContactList = (props) =>{
    return(
        <p className="contactList">
            <code>{props.title}</code>
            <span>{props.content}</span>
        </p>
    )
}

export {ContactList}