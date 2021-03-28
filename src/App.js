import './App.css';
import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }

        this.addTodo=this.addTodo.bind(this);
    }

    addTodo(todo){
        let todoList = this.state.todos;
        todoList.push(todo);
        this.setState({todos:todoList});
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <p>React Todo</p>
                </header>
                <TodoForm addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
