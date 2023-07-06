import React, { useState } from "react";
import { Avatar, ChakraProvider, Circle, Tooltip } from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function Lhs({
  onButtonClicked,
  statusButtonValue,
  signupButtonValue,
  onStatusButtonClick,
  onSignupButtonClick,
}) {
  const [Status, ChangeStatus] = useState(true);
  const changeFormMenu = () => {
    ChangeStatus(!Status);
    console.log(Status);
    onStatusButtonClick(statusButtonValue);
  };

  const [signUp, ChangeSignUpStatus] = useState(true);
  const showSignUp = () => {
    ChangeSignUpStatus(!signUp);
    onSignupButtonClick(signupButtonValue);
  };

  const getScroll = () => {
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", getScroll);

  return (
    <>
      <div className="lhs">
        <ChakraProvider>
          <Circle
            size="32px"
            bg="#00ADB5"
            color="white"
            className="OpenMenuButton"
            onClick={changeFormMenu}
            style={
              !Status
                ? {
                    transform: "rotate(315deg) ",
                  }
                : {
                    transform: "rotate(0deg)",
                  }
            }
          >
            <AddIcon />
          </Circle>
          <Tooltip>
            <Avatar
              className="tooltip"
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              onClick={showSignUp}
            />
          </Tooltip>
        </ChakraProvider>
      </div>
    </>
  );
}

export default Lhs;
