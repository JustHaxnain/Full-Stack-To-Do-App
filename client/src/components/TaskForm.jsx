import React, { useState } from "react";
import { useRevalidator } from "react-router-dom";
import useTaskHandlers from "../hooks/useTaskHandlers";

export default function TaskForm() {
    const [task, setTask] = useState("");
    const { addTaskHandler } = useTaskHandlers();
    return (
        <div className="newTaskContainer">
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    addTaskHandler(task, setTask);
                }}
                className="taskForm inputContainer"
            >
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                    className="taskInput"
                />
                <button type="submit" className="addButton">
                    <i className="fa fa-plus"></i>
                </button>
            </form>
        </div>
    );
}
