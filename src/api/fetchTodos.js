export async function fetchTodos() {
  const response = await fetch("http://localhost:3333/todo");

  if (!response.ok) {
    throw new Error(response);
  }

  const fetchedTodos = response.json();

  return fetchedTodos;
}
