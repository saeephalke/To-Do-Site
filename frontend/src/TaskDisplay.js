
import { Tasks } from "./Tasks"
import { Textbox } from "./Textbox"
import { Button } from "./Button"
import ReactDropdown from "react-dropdown"
import { Link } from "react-router-dom"

export function TaskDisplay(props){

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const years = [2024, 2025, 2026, 2027, 2028]
    
    return(

        <>
            <h1>{props.username}'s Tasks</h1>

            <Textbox text="Task Name: "></Textbox>
            
            <select>
                {months.map((month) =>
                <option value={month}>{month}</option>
            )}
            </select>

            <select>
                {days.map((day) =>
                <option value={day}>{day}</option>
            )}
            </select>

            <select>
                {years.map((year) =>
                <option value={year}>{year}</option>
            )}
            </select>

            <Textbox text="New Task"></Textbox>
            <Button text="Add Task"></Button>
            

            <Tasks task="Clean" dueDate = "08-07-2024"></Tasks>

            <Link to='/'><Button text="Log Out"></Button></Link>
        </>
    )

}