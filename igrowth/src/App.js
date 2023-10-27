import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Graph from './graph.js'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exat path="/" element={<Graph/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App