import Button from "../Button/Button"
import Category from "../Category/Category"
import Tasks from "../Tasks/Tasks"

export default function Todo({ todo }) {
  return (
    <div className="todo">
      <div className="content">
        <Tasks textContent={todo.text} />
        <div className="teste">
          <Category category={todo.category} />
          <div className="buttons">
            <Button content="Completar" className="button" />
            <Button content="X" className="button-delete" />
          </div>
        </div>
      </div>
    </div>
  )
}
