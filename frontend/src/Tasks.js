import { Button } from "./Button"
export function Tasks(props){


    return(
        <>
            <div>
                <p>{props.taskName}</p>
                <p>{props.dueDate}</p>
                <Button text="Done"></Button>
                <br></br>
            </div>
        </>
    )

}