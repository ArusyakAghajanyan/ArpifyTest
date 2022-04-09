import React from 'react';
import './App.css';
import { FormList } from './FormList';
import data from './data';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {  <PostList />} />
              <Route path='form' element = {   <FormList />} />
            </Routes>
          </BrowserRouter>
      </div>
  )

}

export default App;