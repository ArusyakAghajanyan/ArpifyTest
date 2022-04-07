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
        const data = await fetch(
          'http://intern-2022.arpify.com/init',
          {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' }
          }
        );
        const users = await data.json();
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });
  return (
    <div className="App">
      {
        
      }
    </div>
  );
}

export default App;