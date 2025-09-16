import React from "react";

export default function TaskDate({ todoUpdated_at, todoCreated_at }) {
    return (
        <>
            {!todoUpdated_at ? (
                <p className="taskDate">
                    Task Created on {"( "}
                    {new Date(todoCreated_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                    {", "}
                    {new Date(todoCreated_at).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    {" )"}
                </p>
            ) : (
                <p className="taskDate">
                    Task Created on {"( "}
                    {new Date(todoCreated_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                    {", "}
                    {new Date(todoCreated_at).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    {" )"} Last Updated on {"( "}{" "}
                    {new Date(todoUpdated_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}
                    {", "}
                    {new Date(todoUpdated_at).toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                    {" )"}
                </p>
            )}
        </>
    );
}
