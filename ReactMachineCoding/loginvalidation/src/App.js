import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
      </div>
    </form>
  );
}

export default App;
