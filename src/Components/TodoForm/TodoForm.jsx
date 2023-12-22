import "./styles.css"

import { useState } from "react"

export default function TodoForm({ addNewTodo }) {
  const [valueText, setValueText] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(valueText, category)
    if (!valueText || !category) return
    //adicionar todo
    addNewTodo(valueText, "(" + category + ")")
    //limpar os campos
    setValueText("")
    setCategory("")
  }

  return (
    <div className="todo-form">
      <h1>Criar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          value={valueText}
          onChange={(e) => setValueText(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Casa">Casa</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}
