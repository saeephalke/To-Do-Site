import { Button } from "./Button"
import axios from "axios"
import {useState, useContext} from "react"
import { UserContext } from "./App"



export function Tasks(props){
    const [task, setTask] = useState(props.taskName)
    const [due_date, setDueDate] = useState(props.dueDate.substring(0, 10))
    const [username, setUsername] = useContext(UserContext)
    

    return(
        <>
            <div>
                <p>{task}</p>
                <p>{due_date}</p>
                <button onClick={removeTask}>Done</button>
                <br></br>
            </div>
        </>
    )
    async function removeTask(){
        console.log("hi")
        const deleteRes = await axios.delete("http://localhost:8081/deleteTasks?t=" + task + "&d=" + due_date + "&u=" + username)
        
    }
}