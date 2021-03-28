import React from "react";

class Todo extends React.Component{
    render() {
        return (
            <div style={{display: "flex"}}>
                <input type="checkbox"/>>
                <li style={{color:"purple",
                textDecoration: this.props.todo.completed ? "line-through" : null}}
                >
                    {this.props.todo.task}</li>
                <button>X</button>
            </div>
        );
    }
}

export default Todo;