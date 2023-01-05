import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Layout/Header'
import Home from './Pages/Home'
import Project from "./Pages/Project";
import './App.scss';

function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/project/:slug" element={ <Project /> } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
