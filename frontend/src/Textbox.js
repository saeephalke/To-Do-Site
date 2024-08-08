import { useState } from "react";

export function Textbox(props){
    const [text, setText] = useState("");


    return(
        <>
        <p>{props.text}</p>
        <input onChange={(e) => setText(e.target.value)}></input>
        <p>{props.text} is {text}</p>
        </>     
    )
}