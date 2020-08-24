export async function getTodos() {
  const response = await fetch("http://localhost:3333/todo");

  if (!response.ok) {
    throw new Error(response);
  }

  const fetchedTodos = response.json();

  return fetchedTodos;
}

export async function postTodo(todo) {
  const response = await fetch("http://localhost:3333/todo", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw response;
  }
  return response;
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:3333/todo${id}`, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw response;
  }
  return response;
}
