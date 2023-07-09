
import "./_variables.scss";
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import AppRoutes from "./app/routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>);
}

export default App;
