import React from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Graph from './graph.js'
import Growth from './BabyGrowthTable.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exat path="/" element={<Graph/>} />
          <Route exat path="/dev" element={<Growth/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App