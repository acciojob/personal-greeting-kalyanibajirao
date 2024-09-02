import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Enter Your Name:</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default Greeting;
