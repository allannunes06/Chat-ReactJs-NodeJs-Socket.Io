import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import ChatRoom from "./ChatRoom";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/:roomId" element={<ChatRoom/>}></Route>
      </Routes>
    </Router>


  );
}

export default App;
