import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ loadedTodos }) {
    return (
        <ul className="taskList">
            <h2 className="taskLength">
                Total Task : " {loadedTodos.length} "
            </h2>
            {loadedTodos.length > 0 ? (
                <TaskItem loadedTodos={loadedTodos} />
            ) : (
                <p className="taskLength noTask">No Task To Do.</p>
            )}
        </ul>
    );
}
