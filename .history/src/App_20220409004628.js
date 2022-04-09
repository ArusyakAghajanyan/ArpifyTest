import React from 'react';
import Form from './Form';
import './App.css';

import DataJson from './DataJson';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './Form';

function App() {

  return (
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element = { <DataJson />} />
              <Route path='/Form' element = { <Form />} />
          
            </Routes>
          </BrowserRouter>
      </div>
  )

}

export default App;