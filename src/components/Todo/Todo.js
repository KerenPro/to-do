import React from "react";

function Todo(props){

    function handleCheckBoxClick(){
        props.toggleComplete(props.todo.id);
    }

    function handleRemoveClick(){
        props.removeTodo(props.todo.id);
    }

    return (
        <div style={{display:"flex"}}>
            <input type="checkbox" onClick={handleCheckBoxClick} />
            <li style={{color:"white",
            textDecoration: props.todo.completed ? "line-through" : null}}
            >{props.todo.task}</li>
            <button onClick={handleRemoveClick} >X</button>
        </div>
    );

}

export default Todo;