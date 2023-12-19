import { useState } from "react"

import "./App.css"
import Todo from "./Components/todo/Todo"
import TodoForm from "./Components/TodoForm/TodoForm"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "(Trabalho)",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "(Pessoal)",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "(Estudos)",
      isCompleted: false,
    },
  ])

  const addNewTodo = (valueText, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: valueText,
        category: category,
        isCompleted: false,
      },
    ]
    setTodos(newTodos)
  }
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {/*  parenteses chama um objeto */}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  )
}

export default App
