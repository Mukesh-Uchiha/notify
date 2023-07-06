import * as React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import Lhs from "./Lhs";
function Headers({
  statusButtonValue,
  signupButtonValue,
  onStatusButtonClick,
  onSignupButtonClick,
}) {
  return (
    <header>
      <h1>
        <NotificationsActiveIcon className="Icon" /> Notify
      </h1>
      <Lhs
        statusButtonValue={statusButtonValue}
        signupButtonValue={signupButtonValue}
        onStatusButtonClick={onStatusButtonClick}
        onSignupButtonClick={onSignupButtonClick}
      />
    </header>
  );
}

export default Headers;
