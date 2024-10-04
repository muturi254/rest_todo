import { useState } from 'react'
import './App.css'
import { TODOS } from './data/data'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [todos, setTodos] = useState(TODOS);

  const onDelete = (id) => {
    console.log("deleting task", id);
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
  }

  const onAdd = (todo) => {
    console.log(todo);
    
    setTodos([...todos, { id: uuidv4(), ...todo }]) 
  }

  return (
    <>
      {/* <li key={todo.id}>{todo.name}</li> */}
      {/* {todos.map( todo => <TodoItem key={todo.id} todo={todo} /> )} */}

      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onDelete={onDelete} />
    </>
  )
}

export default App
