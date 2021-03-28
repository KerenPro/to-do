import React from "react";
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            id: "",
            task: "",
            completed: false
        }

        this.handleTaskInputChange=this.handleTaskInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleTaskInputChange(e){
        this.setState({task:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            task:this.state.task,
            id: uuidv4()
        });
        this.props.addTodo(this.state);

        //reset form
        this.setState({
            id: "",
            task: ""
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="task" type="text" value={this.state.task} onChange={this.handleTaskInputChange}/>
                <button type="submit">Submit</button>
            </form>
        );
    }

}

export default TodoForm;