import React from "react";
import Todo from "../Todo/Todo";

function TodoList(props){

    return (
        <ul>
            {props.todos.map(todo =>
            <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo} />)}
        </ul>
    );
}

export default TodoList;