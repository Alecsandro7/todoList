import "./styles.css"

export default function Button({ content, type = "", className }) {
  return (
    <button className={className} type={type}>
      {content}
    </button>
  )
}
