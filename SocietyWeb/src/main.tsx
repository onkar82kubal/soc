import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./asset/vendor/bootstrap/css/bootstrap.min.css";
import "./asset/vendor/font-awesome/css/font-awesome.min.css";
import "./asset/vendor/dropify/css/dropify.min.css";
import "./asset/vendor/bootstrap-multiselect/bootstrap-multiselect.css";
import "./asset/css/main.css";
import "./asset/css/blog.css";
import "./asset/css/societywale.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
