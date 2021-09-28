import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./containers/landingPage/LandingPage";
import NavBar from "./containers/navBar/NavBar";
import Home from "./containers/home/Home";
// import DetailContainer from "./components/DetailContainer/DetailContainer";
// import CreateBreed from "./components/CreateBreed/CreateBreed";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={NavBar} />  
        <Route exact path="/home" component={Home} />     
        
         {/*
        <Route exact path="/home/:id" component={DetailContainer} />*/}
        <Route path="/addbreed" component={NavBar} /> 
        {/* <Route path="/addbreed" component={CreateBreed} /> */}
      </div>
    </Router>
  );
}

export default App;
