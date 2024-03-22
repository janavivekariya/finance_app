// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './components/HomePage';
//import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
