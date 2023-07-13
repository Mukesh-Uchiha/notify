import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <div>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
