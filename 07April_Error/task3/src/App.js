import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import ErrorBoundary from './Component/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home =()=><div className='p-3'>Welcome to the Home Page</div>
const About =()=><div className='p-3'>This is the About Page</div>
//Simulate a component that throws an error
const Buggy =()=>{
  throw new Error("Something broke in Buggy component");
};
const App=() =>{
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link className='navbar-brand' to="/">ReactApp</Link>
          <div className='navbar-nav'>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/buggy">Buggy</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={
          <ErrorBoundary>
            <About/>
          </ErrorBoundary>
          }/>
        <Route path='/buggy' element={
          <ErrorBoundary>
            <Buggy/>
          </ErrorBoundary>
        }/>
      </Routes>
    </Router>
  );
}
export default App;
