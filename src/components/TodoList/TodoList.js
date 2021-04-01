import {List} from "@material-ui/core";
import React from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

function TodoList(props){

    return (
        <div className="todos">
            <List>
                {props.todos.map(todo =>
                <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo} />)}
            </List>
        </div>
    );
}

export default TodoList;