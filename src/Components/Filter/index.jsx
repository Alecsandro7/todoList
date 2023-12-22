import "./styles.css"

export default function Filter() {
  return (
    <div className="filter">
      <h2>Filtrar</h2>

      <div className="status">
        <label htmlFor="status">Status:</label>
        <select name="status" id="status">
          <option value="">Todas</option>
          <option value="Completas">Completas</option>
          <option value="Incompletas">Incompletas</option>
        </select>
      </div>
      <div className="order">
        <p>Ordem alfabética</p>
        <button>A-Z</button>
        <button>Z-A</button>
      </div>
    </div>
  )
}
