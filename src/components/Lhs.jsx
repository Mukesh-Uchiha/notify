import React, { useState } from "react";
import {
  Avatar,
  ChakraProvider,
  Circle,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  Switch,
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

  const [eligibility, ChangeEligibility] = useState(false);
  const [throughtout, ChangeThroughtout] = useState(false);
  const [Bound, ChangeBound] = useState(false);

  function handleCheck(event) {
    const name = event.target.id;
    if (name === "eligibility") {
      return ChangeEligibility(!eligibility);
    } else if (name === "throughtout") {
      return ChangeThroughtout(!throughtout);
    } else if (name === "Bound") {
      return ChangeBound(!Bound);
    }
  }
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
            style={
              Status
                ? {
                    transform: "rotate(315deg)",
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
        style={
          Status
            ? { top: "50px", transform: "rotateX(0deg)" }
            : { top: "-60%", transform: "rotateX(90deg)" }
        }
        tabindex="2"
      >
        <div>
          <h1
            className="Formh1"
            style={
              Status
                ? { transform: "translate(10px, 0px)" }
                : { transform: "translate(10px, -50px)" }
            }
          >
            Fill Details
          </h1>
        </div>
        <form>
          <ChakraProvider>
            <div className="inputContainer">
              <div>
                <FormControl isRequired>
                  <FormLabel className="Labels">Company's name</FormLabel>
                  <Input color="white" placeholder="First name" size="sm" />
                </FormControl>
              </div>
              <div>
                <FormControl isRequired>
                <FormLabel className="Labels">Role</FormLabel>
                <Input color="white" placeholder="First name" size="sm" />
                </FormControl>
              </div>
              <div>
                <FormControl isRequired>
                <FormLabel className="Labels">Salary</FormLabel>
                <Input color="white" placeholder="First name" size="sm" />
                </FormControl>
              </div>

              <div>
                 <FormControl isRequired>
                <FormLabel className="Labels">Location</FormLabel>
                <Input
                  color="white"
                  placeholder="Add , if more than one"
                  size="sm" />
              </FormControl>
              </div>
              <div>
                 <FormControl isRequired>
                <FormLabel className="Labels">Deadline</FormLabel>
                <Input
                  color="white"
                  placeholder="Deadline to Register"
                  size="sm"
                  type="datetime-local"
                />
                    </FormControl>
              </div>
              <div>
                 <FormControl isRequired>
                <FormLabel className="Labels">Internship</FormLabel>
                <Input
                  color="white"
                  placeholder="Internship period"
                  size="sm"
                />
                  </FormControl>
              </div>
              <div>
                <FormLabel className="Labels">Eligibilty🎓</FormLabel>
                <FormControl isRequired display="flex" alignItems="center">
                  <FormLabel fontWeight="normal" mb="0" color="#C9C9C9">
                    If There is eligibility criteria
                  </FormLabel>
                  <Switch id="eligibility" isRequred onChange={handleCheck} />
                </FormControl>
                {eligibility && (
                  <div>
                    <FormControl display="flex" alignItems="center">
                      <FormLabel
                        fontWeight="normal"
                        mt={2}
                        mb={2}
                        ml={0}
                        color="#C9C9C9"
                      >
                        If it not is throughtout{" "}
                      </FormLabel>
                      <Switch
                        id="throughtout"
                        isRequred
                        onChange={handleCheck}
                      />
                    </FormControl>
                    {throughtout ? (
                      <FormControl display="flex">
                        <Input
                          color="white"
                          placeholder="10th"
                          size="sm"
                          width="70px"
                          m={2}
                        />
                        <Input
                          color="white"
                          placeholder="Dip/12th"
                          size="sm"
                          width="70px"
                          m={2}
                        />
                        <Input
                          color="white"
                          placeholder="UG"
                          size="sm"
                          width="70px"
                          m={2}
                        />
                      </FormControl>
                    ) : (
                      <>
                        <Input
                          color="white"
                          placeholder="If it is throughtout"
                          size="sm"
                          m={2}
                          ml={0}
                        />
                      </>
                    )}
                  </div>
                )}
              </div>
              <div>
                <FormLabel className="Labels">Bound</FormLabel>
                <FormControl display="flex" alignItems="center">
                  <FormLabel fontWeight="normal" mb="0" color="#C9C9C9">
                    If There is no Bound
                  </FormLabel>
                  <Switch id="Bound" isRequred onChange={handleCheck} />
                </FormControl>
                {Bound && (
                  <Input color="white" placeholder="Bound period" size="sm" />
                )}
              </div>
            </div>
          </ChakraProvider>
        </form>
        <div className="ButtonContainer">
          <ChakraProvider>
            <ButtonGroup spacing="6">
              <Button
                colorScheme="blue"
                style={
                  Status
                    ? { transform: "translate(0px, 0px)" }
                    : { transform: "translate(0px, 50px)" }
                }
              >
                Save
              </Button>
              <Button
                colorScheme="gray"
                style={
                  Status
                    ? { transform: "translate(0px, 0px)" }
                    : { transform: "translate(0px, 50px)" }
                }
              >
                Cancel
              </Button>
            </ButtonGroup>
          </ChakraProvider>
        </div>
      </div>
      <div className="FakeMenu"></div>
    </>
  );
}

export default Lhs;
