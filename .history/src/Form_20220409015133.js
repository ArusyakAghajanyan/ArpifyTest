import React from "react";
import {useState} from "react"

export default function Form() {
    const[allData, setAllData]=useState({
        firstName: "",
        lastName: "",
        birthday: "",
        gender: "",
        image: "",
        file:""
    });
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    
    console.log(data)
    console.log(event.target)
    fetch('http://intern-2022.arpify.com/form', {
        
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-Type': 'application/json' }
          }
      });
  }
  return (
    <div>
      <form id="formId" onSubmit={
          handleSubmit
      }>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label for="lastName">
          Last name:
          <input type="text" />
        </label>
        <label for="birthday">
          Birthday:
          <input type="date" id="birthday" name="birthday" />
        </label>
        <label for="gender">Gender:</label>
        <label for="male">
          Male:
          <input type="radio" name="gender" />
        </label>
           
        <label for="female">
          Female:
          <input type="radio" name="gender" />
        </label>
        <input
          type="image"
          src="img_submit.gif"
          alt="Submit"
          width="48"
          height="48"
        />
        <label for="myfile">
          Select a file:
          <input type="file" id="myfile" name="myfile" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
