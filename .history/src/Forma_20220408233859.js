import React from 'react'

 const Forma = () => {
    return (
        <>
        <form > 
        <div>          
        <label for="firstName">First name:</label>
        
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
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />
<label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
        </div>
        <input type="submit" value="Submit"></input>
        
        </div>     
      </form> 
      </>
    );
}
 
export default Forma;
