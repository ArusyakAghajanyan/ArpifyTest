import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DataJson.css'
import './App.css';

const myData = {
  firstName: 'Arus',
  lastName: 'Aghajanyan',
  birthDay: '1985-01-28',
  gender: 'female'
};

function DataJson() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          'http://intern-2022.arpify.com/init',
          {
            method: 'POST',
            body: JSON.stringify(myData),
            headers: { 'Content-Type': 'application/json' }
          }
        );
        const users = await data.json();
        setData(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const isMe = userData => JSON.stringify(userData) === JSON.stringify(myData);

  return (
    <div>
      <Link to="/form">
        <button>Click here!</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>birthDay</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr className={isMe(item) ? "me" : ""} key={idx}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.birthDay}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
export default DataJson;