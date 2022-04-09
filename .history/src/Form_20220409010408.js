import React from "react";

export default function Form() {
    function handleSubmit(){
        console.log("form")
    }
  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <label>        
          First Name:
          <input type="text" name="name" />
        </label>
        <label for="lastName">
            Last name:
        <input type="text"  />     
      </label>
      <label for="birthday">Birthday:
        <input type="date" id="birthday" name="birthday" />

        </label>
        <label for="gender">Gender:
        <input type="radio"name="male" />
        </label>
        <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />


       
        <input type="submit" value="Submit" /> 
      </form>
    </div>
  );
}