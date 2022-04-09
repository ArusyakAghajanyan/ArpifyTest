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
        <label for="lastName">Last name:</label>

        <input type="submit" value="Submit">
        </div>
        </div>     
      </form> 
      
    );
}
 
export default Forma;