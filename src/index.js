import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';// import of bootstrap css
import "bootstrap/dist/js/bootstrap.bundle"; // import of bootstrap js
import App from "./App";

const root = window.document.querySelector("#root");

ReactDOM.createRoot(root).render(<App />);