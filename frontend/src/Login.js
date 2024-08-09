import { useEffect, useState } from "react";
import { Textbox } from "./Textbox";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export function Login(){

    return(
    <>
    <h1>To Do App</h1>
    
    <h2>Welcome to the To Do App, since this app is not secure, please do not put any important personal information into the app</h2>

    <Textbox text={"Username"}></Textbox>
    <Textbox text={"Password"}></Textbox>

    <Link to='/tasks'> <Button text={"Log In"}></Button></Link>
    <Button text={"Sign Up"}></Button>
    </>
    )
      
}