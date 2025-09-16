import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);

app.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
