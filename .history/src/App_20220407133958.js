import { useEffect, useState } from 'react';
import { test } from './api';


function App() {
  const [allData, setAllData] = useState([])
  console.log(allData)
  async function testTask(){
    const data = await test();
    setAllData(data)
  }
  useEffect(()=>{
    testTask();
  },[])
  return (
    <div className="App">
    </div>
  );
}
