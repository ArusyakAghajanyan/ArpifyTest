import React from 'react'

 const Forma = () => {
    return (
        <form > 
        <div>          
        <label for="firstName">First name:</label>
        <input type="text" />
        </div>
        <div>
        <label for="lastName">Last name:</label>
        <input type="text" id="lname"  />
        </div>
        <div>
        <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">

 
        </div>
        
        </div>     
      </form> 
      
    );
}
 
export default Forma;
<input type="submit" value="Submit">