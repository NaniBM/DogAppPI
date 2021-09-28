import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./containers/landingPage/LandingPage";
import NavBar from "./containers/navBar/NavBar";
import Home from "./containers/home/Home";
import DetailedBreed from "./components/detailedBreed/DetailedBreed";
import AddNewBreed from "./components/addNewBreed/AddNewBreed";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:id" component={DetailedBreed} />
        <Route path="/addbreed" component={NavBar} />
        <Route path="/addbreed" component={AddNewBreed} />
      </div>
    </Router>
  );
}

export default App;
