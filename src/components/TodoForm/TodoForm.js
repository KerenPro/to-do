import React from "react";
import uuid from 'react-uuid';

class TodoForm extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
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
        this.props.addTodo(Object.assign({}, this.state, {id: uuid()}));

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