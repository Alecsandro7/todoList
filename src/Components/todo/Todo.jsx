import Category from "../Category/Category"
import Tasks from "../Tasks/Tasks"

export default function Todo({ todo, removeTodo, completedTodo }) {
  return (
    <div className="todo">
      <div
        className="content"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <Tasks textContent={todo.text} />
        <div className="teste">
          <Category category={todo.category} />
          <div className="buttons">
            <button
              className="button-complete"
              onClick={() => completedTodo(todo.id)}
            >
              Completar
            </button>
            <button
              className="button-delete"
              onClick={() => removeTodo(todo.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
