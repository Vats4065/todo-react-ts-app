import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import { TodoProvider } from "./store/todos.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement  ).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
