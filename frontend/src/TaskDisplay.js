
import { Tasks } from "./Tasks"
import { Textbox } from "./Textbox"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import React, { useContext, useState, useEffect} from "react"
import { UserContext } from "./App"
import axios from "axios"


export function TaskDisplay(props){

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const years = [2024, 2025, 2026, 2027, 2028]

    const [username, setUsername] = useContext(UserContext)

    const [duedate, setDuedate] = useState('')
    const [newTask, setNewtask] = useState('')
    const [, forceRender] = useState(undefined)

    const[tasks, setTasks] = useState([])
    console.log("app has been rendered")
    
   useEffect(()=>{
    const fetchTasks = async () => {
        const res = await axios.get("http://localhost:8081/userTasks?q=" + username)
        setTasks(res.data)
    }
    fetchTasks()
    }, [])

    function addTask(){

        
        const data = {
            task : newTask,
            due_date : duedate,
            user : username
        }

        axios.post("http://localhost:8081/addTasks", data)
        const fetchTasks = async () => {
            const res = await axios.get("http://localhost:8081/userTasks?q=" + username)
            setTasks(res.data)
            console.log(tasks)
        }
        fetchTasks()
        forceRender()
    }

    return(

        <>
            <h1>{props.username}'s Tasks</h1>

            <p>Task Name: </p><input onChange={(e) => setNewtask(e.target.value)}></input>

            <p>Date in MM-DD-YYYY format</p><input onChange={(e) => setDuedate(e.target.value)}></input>

        
            <button onClick={addTask}>Add Task</button>

            {tasks.map((d, i) =>
                    
                    <Tasks taskName={d.task} dueDate={d.due_date}></Tasks>
                    
                
            )}
            

            <Link to='/' onClick={(e) => setUsername("")}><Button text="Log Out"></Button></Link>
        </>
    )

}