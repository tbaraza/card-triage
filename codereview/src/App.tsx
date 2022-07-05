import React from 'react';
import PatientFlow from './patient-flow/PatientFlow';
import NavBar from './shared/components/NavBar';

function App() {
  // Creating a layout component is a better solution
  return (
    <div className="app">
        <NavBar/>
        <PatientFlow/>
    </div>
  )
}

export default App;
