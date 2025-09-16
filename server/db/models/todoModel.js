import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    })
    .promise();

export async function getTodos() {
    const [rows] = await pool.query("SELECT * FROM todos");
    return rows;
}

export async function addTodo(task) {
    const [result] = await pool.query(
        `
        INSERT INTO todos(task)
        VALUE (?)
        `,
        [task]
    );
    const id = result.insertId;
    const [rows] = await pool.query(`SELECT * FROM todos WHERE id = ?`, [id]);
    return rows[0];
}

export async function deleteTodo(id) {
    const [result] = await pool.query(
        `
        DELETE FROM todos
        WHERE id = ?
        `,
        [id]
    );
    return result;
}

export async function updateTodoCompletion(id, completed) {
    const [resut] = await pool.query(
        `
        UPDATE todos
        SET completed = ?
        WHERE id = ?
        `,
        [completed, id]
    );
    return resut;
}

export async function updateTodoTask(id, task) {
    const [resut] = await pool.query(
        `
        UPDATE todos
        SET task = ?
        WHERE id = ?
        `,
        [task, id]
    );
    return resut;
}
