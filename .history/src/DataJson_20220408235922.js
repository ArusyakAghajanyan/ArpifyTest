import React, { useEffect, useState} from 'react';

import './App.css';

function DataJson() {
    const requestBody = {
        firstName: 'Arus',
        lastName: 'Aghajanyan',
        birthDay: '1985-01-28',
        gender: 'female'
      };
      const [data,setData] = useState([]);
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
        setData(users);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData([]);
  });
    return (
        <div>
              <table border = "1">
            <thead>
              <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>birthDay</th>
                <th>gender</th>
              </tr>
            </thead>
           <tbody>
            {data.map(item=>{
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.birthDay} </td>
                <td>{item.gender}</td>
            </tr>
            )            
          })}                 
            </tbody>
          </table>      
            
        </div>
    )
}
export default DataJson;
