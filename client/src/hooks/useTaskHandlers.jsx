import { useRevalidator } from "react-router-dom";
import {
    deleteTodo,
    updateTodoCompletion,
    updateTodoTask,
    addTodo,
} from "../api/fetchApi";

export default function useTaskHandlers() {
    const revalidator = useRevalidator();
    async function handleDeleteTask(id) {
        await deleteTodo(id);
        revalidator.revalidate();
    }
    async function handleTaskCompletion(id, completed) {
        await updateTodoCompletion(id, completed);
        revalidator.revalidate();
    }
    async function addTaskHandler(task, setTask) {
        if (task.trim() !== "") {
            await addTodo(task);
            setTask("");
            revalidator.revalidate();
        }
    }
    async function handleTaskEdit(id, newText) {
        if (newText.trim() !== "") {
            await updateTodoTask(id, newText);
            revalidator.revalidate();
        } else {
            alert("Task cannot be empty");
        }
    }
    return {
        handleDeleteTask,
        handleTaskCompletion,
        addTaskHandler,
        handleTaskEdit,
    };
}
