import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import uuid from 'react-uuid';
//import {makeStyles} from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({}));

function TodoForm(props) {
    //const classes = useStyles();
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false 
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            props.addTodo({...todo, id:uuid()});
        }

        //reset task input
        setTodo({...todo, task: ""});
    }

    const todoFormStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit} style={todoFormStyle}>
            <TextField label="Task" name="task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;