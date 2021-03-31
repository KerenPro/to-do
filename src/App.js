import React, {useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

  const useStyles = makeStyles((theme) => ({
    Container: {
        backgroundColor: theme.palette.background.main
    }
  }));

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos){
            setTodos(storageTodos);
        }
    }, []);

    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo){
        setTodos ([todo, ...todos]);
    }

    function toggleComplete(id){
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo, completed:!todo.completed
                    }
                }
                return todo;
            })
        )
    }

    function removeTodo (id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
           <Container className={classes.Container}>
                <div className="App">
                    <Typography style={{padding:16}} variant="h1">React Todo</Typography>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
                </div>
            </Container>
    );
}

export default App;
