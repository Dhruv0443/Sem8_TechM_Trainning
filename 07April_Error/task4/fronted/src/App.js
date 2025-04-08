import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./Component/ErrorBoundary";
import 'bootstrap/dist/css/bootstrap.min.css';
// Pages
const Home = () => <div className="p-3">Welcome to the Home Page</div>;
const About = () => <div className="p-3">This is the About Page</div>;
const Buggy = () => { 
  throw new Error("Something broke in Buggy component!");
};
// 404 Page
const NotFound = () => (
  <div className="container mt-5 text-center">
    <h1>404</h1>
    <p>Oops! Page not found.</p>
    <Link className="btn btn-primary" to="/">Go to Home</Link>
  </div>
);
const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">ReactApp</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/buggy">Buggy</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
          <ErrorBoundary>
            <About />
          </ErrorBoundary>
        } />
        <Route path="/buggy" element={
          <ErrorBoundary>
            <Buggy />
          </ErrorBoundary>
        } />
        {/* 404 Route */}
        <Route path="*" element={
          <ErrorBoundary>
            <NotFound />
          </ErrorBoundary>
        } />
      </Routes>
    </Router>
  );
};
export default App;