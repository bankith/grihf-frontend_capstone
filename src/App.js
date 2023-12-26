import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;