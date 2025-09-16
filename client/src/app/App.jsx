import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

// Page Imports
import Task, { loader as TaskLoader } from "../pages/Task";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Task />} loader={TaskLoader}></Route>
    )
);

export default function App() {
    return <RouterProvider router={router} />;
}
