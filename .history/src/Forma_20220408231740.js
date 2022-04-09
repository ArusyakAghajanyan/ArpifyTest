import React from 'react'

 const Forma = () => {
    return (
        <form >
           
        <label>First name:</label>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
      </form> 
      
    )
}
 
export default Forma;