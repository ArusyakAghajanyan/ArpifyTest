import React from 'react'

 const Forma = () => {
    return (
        <>
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
        <input type="radio"name="male" />
  <label for="male">Male</label>
  <input type="radio" name="female"/>
  <label for="female">Female</label>
 
        </div>
        
        </div>     
      </form> 
      </>
    );
}
 
export default Forma;
