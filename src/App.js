import React from 'react';
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About';
import Blog from './components/Blog'
import Bot from './components/ChatBot'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ marginTop: "90px", fontFamily: "Comic Sans, Comic Sans MS, cursive", fontSize: "24px" }}>
          <center>
            <b>
              Efficient and user-friendly Chabot Based Crime Registration & Crime Awareness System
            </b>
          </center>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/Bot" component={Bot} />
      </div>
    </Router>
  );
}

export default App;
