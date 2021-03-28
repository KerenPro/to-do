import React, {useState} from "react";
import uuid from 'react-uuid';

function TodoForm(props) {

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

    return (
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;