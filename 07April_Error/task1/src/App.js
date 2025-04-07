import React from 'react';
import ErrorBoundary from './Component/ErrorBoundary';
//Simulate an error
function BuggyComponent(){
  throw new Error("I crashed!");
  return <div>This will not rendered</div>;
}
function App() {
  return (
    <div>
      <h1>My React App</h1>
      {/* Wrap only the risky component */}
      <ErrorBoundary>
        <BuggyComponent/>
      </ErrorBoundary>
    </div>
  );
}

export default App;