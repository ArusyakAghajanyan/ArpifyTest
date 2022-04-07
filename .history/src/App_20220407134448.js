import { useEffect } from 'react';
import logo from './logo.svg';
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
        const data = await fetch(
          'http://intern-2022.arpify.com/init',
          {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' }
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;