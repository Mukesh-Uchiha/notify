import React, { useState } from 'react';
import {
  Avatar,
  ChakraProvider,
  Circle,
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  Switch,
} from '@chakra-ui/react';

import { Button, ButtonGroup } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function Lhs() {
  const formDetail = [
    { placeholder: 'company name', label: 'company ' },
    { placeholder: 'Enter the role(s)', label: ' role' },
    { placeholder: 'Enter the CTC ', label: 'Salary' },
    { placeholder: 'Enter the Location', label: 'Company Location' },
    {
      placeholder: 'Enter the last Date ',
      label: 'Deadline',
      type: 'datetime-local',
    },
  ];

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
  const [throughout, ChangeThroughout] = useState(false);
  const [Bound, ChangeBound] = useState(false);

  const getScroll = () => {
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", getScroll);

  function handleCheck(event) {
    const name = event.target.id;
    if (name === 'eligibility') {
      return ChangeEligibility(!eligibility);
    } else if (name === 'throughout') {
      return ChangeThroughout(!throughout);
    } else if (name === 'Bound') {
      return ChangeBound(!Bound);
    }
  }
<<<<<<< HEAD

=======
>>>>>>> ea3f5a90dfd8899e2b725172f5c2a759abefd0ca
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
              Status
                ? {
                    transform: 'rotate(315deg)',
                  }
                : {
                    transform: 'rotate(0deg)',
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
        style={!signUp ? { top: '65px' } : { top: '-200%' }}
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
<<<<<<< HEAD
            ? { top: "0px", transform: "rotateX(0deg)" }
            : { top: "-100%", transform: "rotateX(90deg)" }
=======
            ? { top: '50px', transform: 'rotateX(0deg)' }
            : { top: '-60%', transform: 'rotateX(90deg)' }
>>>>>>> ea3f5a90dfd8899e2b725172f5c2a759abefd0ca
        }
      >
        <div>
          <h1
            className="Formh1"
            style={
              Status
                ? { transform: 'translate(10px, 0px)' }
                : { transform: 'translate(10px, -50px)' }
            }
          >
            Fill Details
          </h1>
        </div>
        <form>
          <ChakraProvider>
            <div className="inputContainer">
              {formDetail.map((formDetail, index) => (
                <div key={index}>
                  <FormControl isRequired>
                    <FormLabel className="Labels">
                      {' '}
                      {formDetail.label}
                    </FormLabel>
                    <Input
                      color="white"
                      placeholder={formDetail.placeholder}
                      type={formDetail.type}
                      size="sm"
                    />
                  </FormControl>
                </div>
              ))}
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
                <FormLabel className="Labels" mt="1">
                  Eligibilty🎓
                </FormLabel>
                <FormControl
                  isRequired
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormLabel fontWeight="normal" mb="0" color="#C9C9C9">
                    If There is eligibility criteria
                  </FormLabel>
                  <Switch id="eligibility" isRequred onChange={handleCheck} />
                </FormControl>
                {eligibility && (
                  <div>
                    <FormControl
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={2}
                      mb={2}
                    >
                      <FormLabel fontWeight="normal" ml={0} color="#C9C9C9">
                        If it not is through out{' '}
                      </FormLabel>
                      <Switch
                        id="throughout"
                        isRequred
                        onChange={handleCheck}
                      />
                    </FormControl>
                    {throughout ? (
                      <FormControl
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Input
                          color="white"
                          placeholder="10th"
                          size="sm"
                          // width="70px"
                          m={2}
                        />
                        <Input
                          color="white"
                          placeholder="Dip/12th"
                          size="sm"
                          // width="80px"
                          m={2}
                        />
                        <Input
                          color="white"
                          placeholder="UG"
                          size="sm"
                          // width="70px"
                          m={2}
                        />
                      </FormControl>
                    ) : (
                      <>
                        <Input
                          color="white"
                          placeholder="If it is through out"
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
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
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
                    ? { transform: 'translate(0px, 0px)' }
                    : { transform: 'translate(0px, 50px)' }
                }
              >
                Save
              </Button>
              <Button
                colorScheme="gray"
                style={
                  Status
                    ? { transform: 'translate(0px, 0px)' }
                    : { transform: 'translate(0px, 50px)' }
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
