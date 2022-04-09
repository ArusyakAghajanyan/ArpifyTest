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
        <input type="text" id="lname"  />     
      </label>
       
        <input type="submit" value="Submit" /> 
      </form>
    </div>
  );
}
