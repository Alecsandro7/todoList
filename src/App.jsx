import { useState } from "react"

import "./App.css"
import Todo from "./Components/todo/Todo"
import TodoForm from "./Components/TodoForm/TodoForm"
import Filter from "./Components/Filter"

import Search from "./Components/Search"

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
  const [search, setSearch] = useState("")

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

  const completedTodo = (id) => {
    const newTodos = [...todos]

    newTodos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
        setTodos(newTodos)
      }
    })
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter />
      <div className="todo-list">
        {/*  parenteses chama um objeto */}

        {todos
          .filter((todo) =>
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completedTodo={completedTodo}
            />
          ))}
      </div>
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  )
}

export default App
