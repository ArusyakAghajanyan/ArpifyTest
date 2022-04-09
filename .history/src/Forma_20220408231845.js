import React from 'react'

 const Forma = () => {
    return (
        <form >
           
        <label>First name:</label>
        <input type="text" id="fname"/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe">
        <input type="submit" value="Submit">
      </form> 
      
    )
}
 
export default Forma;