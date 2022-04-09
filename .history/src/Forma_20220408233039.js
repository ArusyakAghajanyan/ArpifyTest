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
        <input type="date" id="birthday" name="birthday" />
        </div>
        <label for="gender">Gender:</label>
        <input type="radio" id="html" name="male" >
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
 
        </div>
        
        </div>     
      </form> 
      
    );
}
 
export default Forma;
<input type="submit" value="Submit">