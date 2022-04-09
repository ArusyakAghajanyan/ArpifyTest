import React from 'react'

 const Forma = () => {
    return (
        <form >
           
        <label>First name:</label>
        <input type="text" id="fname"/>
        <label for="firstName">Last name:</label>
        <input type="text" id="lname"  />
        <input type="submit" value="Submit">
      </ form> 
      
    )
}
 
export default Forma;