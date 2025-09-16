import React, { useRef, useEffect, useState, Suspense } from "react";
import { useLoaderData, Await, useRevalidator } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import fetchTodos from "../api/fetchApi";
import Loading from "../components/Loading";

export async function loader() {
    return {
        todos: fetchTodos(),
    };
}

export default function Task() {
    const { todos } = useLoaderData();
    return (
        <section className="allTask">
            <div className="allTaskContainer">
                <h1 className="appHeading">To Do App</h1>
                <TaskForm />
                <div className="taskListContainer">
                    <Suspense fallback={<Loading />}>
                        <Await resolve={todos}>
                            {(loadedTodos) => (
                                <TaskList loadedTodos={loadedTodos} />
                            )}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
