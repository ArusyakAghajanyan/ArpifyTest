import React from 'react';
import './App.css';

import DataJson from './DataJson';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {  <DataJson />} />
              <Route path='form' element = {   <FormList />} />
            </Routes>
          </BrowserRouter>
      </div>
  )

}

export default App;