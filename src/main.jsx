import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Context Provider
import MovieProvider from "./Context/Movie.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);
