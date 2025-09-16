# 📝 Full Stack Todo App

![To Do App](/client/public/toDoApp.png "To Do App Screenshot")

---

## 🚀 Tech Stack

-   **Frontend:** React, Vite, CSS (custom, responsive)
-   **Backend:** Node.js, Express.js
-   **Database:** MySQL (mysql2)
-   **Other:** dotenv, CORS, RESTful API, Fetch API

---

## ✨ Features

### ✅ Developer Experience

-   **Custom Hooks:** Encapsulated handlers (`handleDeleteTask`, `handleTaskCompletion`, `handleTaskEdit`, `addTaskHandler`) in `useTaskHandlers`.
-   **Separation of concerns:** Components, hooks, handlers, and queries are modular and organized.
-   **Async/await:** All DB and API calls handled asynchronously.
-   **Environment variables:** `.env` for DB credentials.
-   **CORS + JSON middleware:** Backend ready for frontend consumption.

### ✅ Backend (Express + MySQL), Time & Metadata

-   **RESTful API:**
    -   `GET /todos` → fetch all tasks
    -   `POST /todos` → add a new task
    -   `DELETE /todos/:id` → delete a task
    -   `PUT /todos/:id` → toggle completion
    -   `PUT /todos/:id/task` → update task text
-   **Validation:** Prevents empty tasks.
-   **Error handling:** Returns 400 / 404 / 500 depending on the issue.
-   **Modular structure:** Routes, models, schema, and server separated cleanly.
-   **Created time:** Every todo gets a `created_at` timestamp.
-   **Updated time:** Tasks have an `updated_at` timestamp that changes when edited.
-   **Dynamic display:** Shows either "Created on..." or "Edited on..." depending on the last action.

### ✅ Database (MySQL)

-   **Todos table schema:** `id`, `task`, `completed`, `created_at`, `updated_at`.
-   **Auto-increment ID:** Unique ID per task.
-   **Default values:** `completed` defaults to false, `created_at` defaults to now.
-   **Auto update timestamp:** `updated_at` auto refreshes when edited.

### ✅ Core Functionality

-   **Add tasks:** Create new todos with a task description.
-   **List tasks:** Fetch all tasks from the backend and display them.
-   **Delete tasks:** Remove a task permanently from the database.
-   **Mark complete/incomplete:** Toggle the completed status of a task.
-   **Edit task content:** Update the text of an existing todo.
-   **Reusable custom hooks:** `useTaskHandlers` centralizes CRUD logic.

---

## 📁 Folder Structure

```
todoapp/
│
├── client/                # Frontend (React)
│   ├── src/
│   │   ├── components/    # Reusable React components
|   |   ├── api/           # fetch api
│   │   ├── pages/         # Page-level components
│   │   ├── hooks/         # Custom React hooks
│   │   └── styles/        # CSS files
│   │   └── app/           # root
│   └── public/            # Static assets (including screenshot)
│
├── server/                # Backend (Node.js/Express)
│   ├── db/
│   │   ├── models/        # Database query logic (todoModel.js)
│   │   └── schema.sql     # SQL schema for tables
│   ├── routes/            # Express route handlers
│   └── server.js          # Main Express server
│
└── README.md
```

---

## 🛠️ How It Works

-   **Frontend:**  
    Built with React and Vite. Uses custom CSS for styling. Fetches and updates todos via RESTful API calls to the backend.

-   **Backend:**  
    Node.js with Express serves as the API layer. All CRUD operations are exposed as RESTful endpoints under `/todos`. Uses `mysql2` to interact with the MySQL database.

-   **Database:**  
    MySQL database stores all todo items. The schema is defined in `server/db/schema.sql`.

---

## ⚡ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/todoapp.git
cd todoapp
```

### 2. **Setup the Database**

-   Make sure you have MySQL installed and running.
-   Create a database (e.g., `todoapp`).
-   Run the schema to create the required tables:

    ```sql
    -- In your MySQL terminal:
    SOURCE ./server/db/schema.sql;
    ```

-   Configure your database credentials in a `.env` file in `/server` (see `.env.example` if provided).

### Example `.env` for Backend

-   MYSQL_HOST = '127.0.0.1'
-   MYSQL_USER = 'username'
-   MYSQL_PASSWORD = 'password'
-   MYSQL_DATABASE = 'todo_app'

### 3. **Install Dependencies**

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

### 4. **Run the App**

#### Start the Backend

```bash
node server.js
```

#### Start the Frontend

```bash
cd ../client
npm run dev
```

-   The frontend will be available at `http://localhost:5173` (or as specified by Vite).
-   The backend API runs at `http://localhost:8080`.

---

## 📬 API Endpoints

-   `GET    /todos` – Get all todos
-   `POST   /todos` – Add a new todo
-   `DELETE /todos/:id` – Delete a todo
-   `PUT    /todos/:id` – Update completion status
-   `PUT    /todos/:id/task` – Edit task text

---

## 🧩 Customization

-   **Styling:** All styles are in `client/src/styles/index.css`.
-   **Components:** Add or modify React components in `client/src/components/`.
-   **Database:** Update schema or queries in `server/db/`.

---

## 📸 Screenshot

![To Do App](/client/public/toDoAppCLoseUp.png "To Do App Screenshot")

---

## 📝 License

MIT

---

**✨ In short, this is not just a simple Todo list — it's a full CRUD app with clean architecture, modern React hooks, Express REST API, and robust SQL schema design. Built with developer experience and scalability in mind.**

