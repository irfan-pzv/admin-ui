import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import PageRegister from "./latihan/pages/PageRegister.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageRegister />
  </StrictMode>,
);
