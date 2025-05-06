import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ABC, { a, b } from "./App.jsx";

console.log(a, b);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ABC />
  </StrictMode>
);
