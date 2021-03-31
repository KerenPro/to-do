import {Checkbox, IconButton, ListItem, Typography} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";

function Todo(props){

    function handleCheckBoxClick(){
        props.toggleComplete(props.todo.id);
    }

    function handleRemoveClick(){
        props.removeTodo(props.todo.id);
    }

    return (
        <ListItem style={{display:"flex"}}> 
            <Checkbox checked={props.todo.completed} onClick={handleCheckBoxClick} />
            <Typography variant="body1"
            style={{textDecoration: props.todo.completed ? "line-through" : null}}
            >{props.todo.task}</Typography>
            <IconButton aria-label="delete" onClick={handleRemoveClick}>
                <DeleteIcon /> 
            </IconButton>
        </ListItem>
    );

}

export default Todo;