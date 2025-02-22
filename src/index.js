import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthConxtextProvider } from "./context/AuthContextProvider";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthConxtextProvider>
    <BrowserRouter>
      <Header />
      <div className="container">
        <App />
      </div>
    </BrowserRouter>
  </AuthConxtextProvider>
);
