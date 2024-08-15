import { useEffect, useState, useContext } from "react";
import { Textbox } from "./Textbox";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { UserContext } from "./App";


export function Login(){

    const [username, setUsername] = useContext(UserContext)

    return(
    <>
    <h1>To Do App</h1>
    
    <h2>Welcome to the To Do App, since this app is not secure, please do not put any important personal information into the app</h2>

    <p>Login</p><input onChange={(e) => setUsername(e.target.value)}></input>
    <Link to='/tasks'> <Button text={"Log In"}></Button></Link>
    <Button text={"Sign Up"}></Button>
    </>
    )
      
}