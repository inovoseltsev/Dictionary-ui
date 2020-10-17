export default function createNewItem(id, route, name, onClick = () => {
}) {
  return {
    id,
    route,
    name,
    onClick
  }
}
