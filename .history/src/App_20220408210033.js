import { useEffect, useState } from 'react';

import './App.css';

const requestBody = {
  firstName: 'Arus',
  lastName: 'Aghajanyan',
  birthDay: '1985-01-28',
  gender: 'female'
};
function App() {
  const [userData,setUserData] = useState([]);
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
        setUserData(userData);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  });
  return (
    <div className="App">
      
        
    </div>
  );
}

export default App;