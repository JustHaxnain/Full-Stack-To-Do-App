import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
