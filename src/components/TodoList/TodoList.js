import React from "react";
import Todo from "../Todo/Todo";

class TodoList extends React.Component{
    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                <Todo key={todo.id} todo={todo}/>)}
            </ul>
        );
    }
}

export default TodoList;