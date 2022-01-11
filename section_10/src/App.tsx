import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css";
import { Todo } from './Todo';
import { TodoType } from "./types/todo";
import { Text } from "./Text";

const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return(
    <div className="App">
      <h1>Hello, React * TypeScript</h1>
      <Text
        color="red"
        fontSize="16px"
      />
      <button onClick={onClickFetchData}>Get data</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
      ))}
    </div>
  )
}

export default App;
