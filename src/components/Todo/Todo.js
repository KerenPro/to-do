import React from "react";

function Todo(props){

    return (
        <div style={{display:"flex"}}>
            <input type="checkbox"/>
            <li style={{color:"white",
            textDecoration: props.todo.completed ? "line-through" : null}}
            >{props.todo.task}</li>
            <button>X</button>
        </div>
    );

}

export default Todo;