import React from 'react'

 const Forma = () => {
    return (
        <form > 
            <div>          
        <label for="firstName">First name:</label>
        <input type="text" id="fname"/>
        <label for="lastName">Last name:</label>
        <input type="text" id="lname"  />
        <input type="submit" value="Submit">
      </form> 
      
    )
}
 
export default Forma;