
import { Tasks } from "./Tasks"
import { Button } from "./Button"
import { Link } from "react-router-dom"
import React, { useContext, useState, useEffect} from "react"
import { UserContext } from "./App"
import axios from "axios"


export function TaskDisplay(props){

    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    const days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    const years = ["2025", "2026", "2027", "2028", "2029"]

    const [username, setUsername] = useContext(UserContext)

    const [day, setDay] = useState("01")
    const [month, setMonth] = useState("01")
    const [year, setYear] = useState("2025")
    const [newTask, setNewtask] = useState('')

    const[tasks, setTasks] = useState([])
    
   useEffect(()=>{
    const fetchTasks = async () => {
        const res = await axios.get("http://localhost:8081/userTasks?q=" + username)
        setTasks(res.data)
    }
    if(username) fetchTasks();
    }, [username])

    async function addTask() {
        console.log("hi")
        const data = {
            task: newTask,
            due_date: `${year}-${month}-${day}`,
            user: username
        };
    
        
        const postRes = await axios.post("http://localhost:8081/addTasks", data);
        console.log("hello")
        console.log("Post response:", postRes);

        const getRes = await axios.get("http://localhost:8081/userTasks?q=" + username);
        console.log("Get response:", getRes);
        setTasks(getRes.data);
      
    }

    return(
        
        <>
            
            <h1>{props.username}'s Tasks</h1>

            <div id="addTasks">
            <p>Task Name</p><input onChange={(e) => setNewtask(e.target.value)}></input>
            <p>Select a day</p>
            <select onChange={(e) => setDay(e.target.value)}>
                {days.map((d, i) =>
                    <option key={i}>{d}</option>

                )}
            </select>
            <p>Select a month</p>
            <select onChange={(e) => setMonth(e.target.value)}>
                {months.map((d, i) =>
                    <option key={i}>{d}</option>

                )}
            </select>

            <p>Select a year</p>
            <select onChange={(e) => setYear(e.target.value)}>
                {years.map((d, i) =>
                    <option key={i}>{d}</option>

                )}
            </select>

        
            <button onClick={addTask}>Add Task</button>
            </div>
            {tasks.map((d, i) =>
                    
                    <Tasks key={i} taskName={d.task} dueDate={d.due_date}></Tasks>
                    
                
            )}
            

            <Link to='/' onClick={(e) => setUsername("")}><Button text="Log Out"></Button></Link>
        </>
    )

}