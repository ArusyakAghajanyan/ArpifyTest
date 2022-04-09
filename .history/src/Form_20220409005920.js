import React from "react";

export default function Form() {
    function handleSubmit()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>        
          First Name:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
}
