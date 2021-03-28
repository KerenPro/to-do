import React from "react";

class TodoForm extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            id: "",
            task: "",
            completed: false
        }

        this.handleTaskInputChange=this.handleTaskInputChange.bind(this);
    }

    handleTaskInputChange(e){
        this.setState({task:e.target.value});
    }

    render () {
        return (
            <form>
                <input name="task" type="text" value={this.state.task} onChange={this.handleTaskInputChange}/>
                <button></button>
            </form>
        );
    }

}

export default TodoForm;