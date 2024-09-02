import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Personalized Greeting</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Greet Me</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default Greeting;
