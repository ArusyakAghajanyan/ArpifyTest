> +37495292905:
import React, { useState } from "react";

const validTypes = {
  image: ["image/png", "image/jpeg"],
  pdf: ["application/pdf"]
};

export default function Form() {
  const [newUserData, setNewUserData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    gender: "",
    image: null,
    pdf: null
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(newUserData).forEach(field => {
        formData.append(field, newUserData[field]);
      });
      const response = await fetch('http://intern-2022.arpify.com/form', {
        method: 'POST',
        body: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const data = await response.json();
      console.log(response, data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setNewUserData(newUserData => ({
      ...newUserData,
      [name]: value
    }));
  };

  const handleFileInputChange = event => {
    const { name } = event.target;
    const file = event.target.files[0];
    if (validTypes[name].includes(file.type)) {
      setNewUserData(newUserData => ({
        ...newUserData,
        [name]: file
      }));
      return;
    }
    console.error("Please upload valid format image.");
  };
  
  const { firstName, lastName, birthDay, gender } = newUserData;
  return (
    <div>
      <form id="formId" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" id="name" name="firstName" value={firstName} onChange={handleChange} />
        </label>
        <label htmlFor="lastName">
          Last name:
          <input type="text" name="lastName" value={lastName} onChange={handleChange} />
        </label>
        <label htmlFor="birthday">
          Birthday:
          <input type="date" id="birthday" name="birthDay" value={birthDay} onChange={handleChange} />
        </label>
        <span>Gender:</span>
        <label htmlFor="male">
          Male:
          <input type="radio" name="gender" value="male" onChange={handleChange} checked={gender === "male"} />
        </label>

        <label htmlFor="female">
          Female:
          <input type="radio" name="gender" value="female" onChange={handleChange} checked={gender === "female"} />
        </label>
        
        <label htmlFor="myfile">
          Select a image:
          <input type="file" id="userImage" name="image" onChange={handleFileInputChange} />
        </label>

        <label htmlFor="myfile">
          Select a pdf file:
          <input type="file" id="pdf" name="pdf" onChange={handleFileInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

> +37495292905:
Esiel index.css i verjum avelacra vor sax mi toxi vra chlni





form {
  display: flex;
  flex-direction: column;
  padding: 64px;
}

form input[type="submit"] {
  width: 64px;
}
