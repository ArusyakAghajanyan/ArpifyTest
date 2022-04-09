import React from 'react'

 const Forma = () => {
    return (
        <>
        <form >                 
        <label for="firstName">First name:
        <input type="text" />
        </label>      
        <label for="lastName">Last name:
        <input type="text" id="lname"  />     
      </label>
       
        <label for="birthday">Birthday:
        <input type="date" id="birthday" name="birthday" />

        </label>
        
        <label for="gender">Gender:
        <input type="radio"name="male" />
        </label>
        
  <label for="male">Male:
<input type="radio" name="male"/>
</label>
  
  <label for="female">Female:
<input type="radio" name="female"/>
</label>
<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48" />
<label for="myfile">Select a file:
<input type="file" id="myfile" name="myfile">

</label>
       
        <input type="submit" value="Submit"></input>
        
        </div>     
      </form> 
      </>
    );
}
 
export default Forma;
