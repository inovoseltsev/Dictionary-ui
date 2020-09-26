export default function createNewItem(id, route, name, className = "", onClick = () => {
}) {
  return {
    id,
    route,
    name,
    className,
    onClick
  }
}