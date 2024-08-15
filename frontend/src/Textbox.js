import { useState } from "react";

export function Textbox(props){
    const [text, setText] = useState("");


    return(
        <>
        <p>{props.text}</p>
        <input></input>
        </>     
    )
}