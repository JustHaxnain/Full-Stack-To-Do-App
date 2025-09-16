import { Router } from "express";
import {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodoCompletion,
    updateTodoTask,
} from "../db/models/todoModel";

const router = Router();

router.get("/", async (req, res) => {
    const todos = await getTodos();
    res.send(todos);
});

router.post("/", async (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).send({ error: "Task is required" });
    }
    const newTodo = await addTodo(task);
    res.status(201).json(newTodo);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deleted = await deleteTodo(id);
    if (deleted.affectedRows === 0) {
        return res.status(404).send({ error: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    if (completed === undefined) {
        return res.status(400).send({ error: "Task is required" });
    }
    const updated = await updateTodoCompletion(id, completed);
    if (updated.affectedRows === 0) {
        return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo successfully updated" });
});

router.put("/:id/task", async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    if (!task || task.trim() === "") {
        return res.status(400).json({ error: "Task text is required" });
    }
    try {
        const updatedTask = await updateTodoTask(id, task);
        if (updatedTask.affectedRows === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({ message: "Task updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error while updating task" });
    }
});

export default router;
