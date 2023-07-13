import React, { useState } from "react";
import Content from "./Content";
import Headers from "./Header";
import FormDiv from "./FormDiv";
import SideMenu from "./SideMenu";
import "../css/style.css";
function App() {
  const [statusButtonValue, setStatusButtonValue] = useState(false);
  const [signupButtonValue, setSignupButtonValue] = useState(false);

  const handleStatusButtonClick = () => {
    setStatusButtonValue(!statusButtonValue);
    if (signupButtonValue && statusButtonValue) {
      setSignupButtonValue(true);
    } else {
      setSignupButtonValue(false);
    }
  };

  const handleSignupButtonClick = () => {
    setSignupButtonValue(!signupButtonValue);
    if (signupButtonValue && statusButtonValue) {
      setStatusButtonValue(true);
    } else {
      setStatusButtonValue(false);
    }
  };

  return (
    <div>
      <Headers
        statusButtonValue={statusButtonValue}
        signupButtonValue={signupButtonValue}
        onStatusButtonClick={handleStatusButtonClick}
        onSignupButtonClick={handleSignupButtonClick}
      />

      <FormDiv
        statusButtonValue={statusButtonValue}
        onStatusButtonClick={setStatusButtonValue}
      />

      <Content />
      <SideMenu signupButtonValue={signupButtonValue} />
    </div>
  );
}
export default App;
