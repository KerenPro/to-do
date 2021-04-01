import {List} from "@material-ui/core";
import React from "react";
import Todo from "../Todo/Todo";
import {makeStyles} from '@material-ui/core/styles';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
    List: {
        backgroundColor: theme.palette.list.main
    }
  }));

function TodoList(props){
    const classes= useStyles();

    return (
        <List className={classes.List}>
            {props.todos.map(todo =>
            <Todo key={todo.id} todo={todo} toggleComplete={props.toggleComplete} removeTodo={props.removeTodo} />)}
        </List>
    );
}

export default TodoList;