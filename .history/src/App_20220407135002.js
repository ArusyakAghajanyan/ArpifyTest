import { useEffect } from 'react';

import './App.css';

const requestBody = {
  firstName: 'Arus',
  lastName: 'Aghajanyan',
  birthDay: '1985-01-28',
  gender: 'female'
};
function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
       
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;