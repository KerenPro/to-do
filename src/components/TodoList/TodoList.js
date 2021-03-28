import {List} from "@material-ui/core";
import React from "react";
import Todo from "../Todo/Todo";

function TodoList(props){

    return (
        <List>
            {props.todos.map(todo =>
            <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo} />)}
        </List>
    );
}

export default TodoList;