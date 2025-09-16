export default async function fetchTodos() {
    const response = await fetch("http://localhost:8080/todos");
    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }
    const data = await response.json();
    return data;
}

export async function addTodo(task) {
    const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        body: JSON.stringify({ task: task }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to add todo");
    }
    const data = await response.json();
    return data;
}

export async function deleteTodo(id) {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete todo");
    }
    const data = await response.json();
    return data;
}

export async function updateTodoCompletion(id, completed) {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify({ completed: completed }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to update todo");
    }
    const data = await response.json();
    return data;
}

export async function updateTodoTask(id, task) {
    const response = await fetch(`http://localhost:8080/todos/${id}/task`, {
        method: "PUT",
        body: JSON.stringify({ task: task }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Failed to update task text");
    }
    return await response.json();
}
