import React from "react";

export default function Form() {
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
