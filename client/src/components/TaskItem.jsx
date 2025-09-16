import React, { useRef, useEffect, useState } from "react";
import TaskDate from "./TaskDate";
import useTaskHandlers from "../hooks/useTaskHandlers";

export default function TaskItem({ loadedTodos }) {
    const { handleDeleteTask, handleTaskCompletion, handleTaskEdit } =
        useTaskHandlers();
    const [isEditingId, setIsEditingId] = useState(null);
    const [newText, setNewText] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        if (isEditingId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditingId]);
    const allTodos = loadedTodos.map((todo) => (
        <li key={todo.id} className="taskItem">
            {isEditingId === todo.id ? (
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        await handleTaskEdit(todo.id, newText);
                        setIsEditingId(null);
                        setNewText("");
                    }}
                    className="taskEditForm"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="taskEditInput"
                    />
                </form>
            ) : (
                <p
                    className={`taskItemP ${
                        todo.completed ? "strikeThrough" : ""
                    }`}
                >
                    {todo.task}.
                </p>
            )}
            <div className="taskButtonContainer">
                <div className="taskButtons">
                    {isEditingId === todo.id ? (
                        <button
                            type="submit"
                            onClick={async () => {
                                await handleTaskEdit(todo.id, newText);
                                setIsEditingId(null), setNewText("");
                            }}
                            className="saveButton"
                        >
                            <i className="fa fa-save"></i>
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                setNewText(todo.task), setIsEditingId(todo.id);
                            }}
                            disabled={todo.completed}
                            className="editButton"
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                    )}
                    <button
                        className={`taskCheckBox ${
                            todo.completed ? "completed" : "incomplete"
                        }`}
                        onClick={() =>
                            handleTaskCompletion(todo.id, !todo.completed)
                        }
                    >
                        {todo.completed ? (
                            <i className="fa fa-check"></i>
                        ) : (
                            <i className="fa fa-close"></i>
                        )}
                    </button>
                    <button
                        onClick={() => handleDeleteTask(todo.id)}
                        className="deleteButton"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
                <TaskDate
                    todoUpdated_at={todo.updated_at}
                    todoCreated_at={todo.created_at}
                />
            </div>
        </li>
    ));
    return <>{allTodos}</>;
}
