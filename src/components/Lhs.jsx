import React, { useState } from "react";
import {
  Avatar,
  ChakraProvider,
  Circle,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function Lhs() {
  const [Status, ChangeStatus] = useState(false);
  const changeFormMenu = () => {
    ChangeStatus(!Status);
    console.log(Status);
  };

  const [signUp, ChangeSignUpStatus] = useState(true);
  const showSignUp = () => {
    ChangeSignUpStatus(!signUp);
    console.log(signUp);
  };

  return (
    <>
      <div className="lhs">
        <ChakraProvider>
          <Circle
            size="32px"
            bg="#00ADB5"
            color="white"
            tabindex="1"
            className="OpenMenuButton"
            onClick={changeFormMenu}
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
      <div
        className="tooltipMenu"
        style={!signUp ? { top: "65px" } : { top: "-200%" }}
      >
        <ChakraProvider>
          <ButtonGroup spacing="6">
            <Button colorScheme="blue">Login</Button>
          </ButtonGroup>
        </ChakraProvider>
      </div>
      <div
        className="Form"
        style={Status ? { top: "50px" } : { top: "-60%" }}
        tabindex="2"
      >
        <div className="inputContainer">
          <h1 className="Formh1">Fill Details</h1>
          <ChakraProvider>
            <form>
              <FormControl className="FormPadder" isRequired>
                <FormLabel className="Labels">First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>
            </form>
          </ChakraProvider>
        </div>
        <div className="ButtonContainer">
          <ChakraProvider>
            <ButtonGroup spacing="6">
              <Button colorScheme="blue">Save</Button>
              <Button colorScheme="gray">Cancel</Button>
            </ButtonGroup>
          </ChakraProvider>
        </div>
      </div>
    </>
  );
}

export default Lhs;
