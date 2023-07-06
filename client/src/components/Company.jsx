import React, { useState } from 'react';
import {
  Checkbox,
  ChakraProvider,
  Avatar,
  AvatarGroup,
  Tooltip,
} from '@chakra-ui/react';
import { Button } from '@mui/base';

function Company(props) {
  const [isRegistered, setIsRegistereded] = useState(false);
  const handleCheckboxClick = () => {
    setIsRegistereded(!isRegistered);
  };

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const TooltipAvatar = (props) => (
    <Tooltip label={props.name}>
      <Avatar {...props} />
    </Tooltip>
  );
  return (
    <div className="CompanyBox">
      {' '}
      <ChakraProvider>
        <h1>{props.Companyname} </h1>
        <hr />
        <div className="FlexContainer">
          <div className="CompanyBoxLhs">
            <p>Roles 👨‍💼: {props.Roles}</p>
            <p>Salary 💸: {props.Salary} lpa</p>
            <p>Eligibilty🎓 : {props.Eligibilty}</p>
            <p>Location 📌: {props.Location}</p>
            <p>Bound : {props.Bound}</p>
            <p>Internship 🗿: {props.Internship}</p>
          </div>
          <div className="CompanyBoxRhs">
            <Checkbox colorScheme="red" onChange={handleCheckboxClick}>
              {!isRegistered ? 'Register' : 'Registered'}
            </Checkbox>

            <AvatarGroup
              size="sm"
              max={
                show
                  ? props.usersDetails.length < 10
                    ? props.usersDetails.length
                    : 10
                  : 2
              }
              bg="none"
            >
              {props.usersDetails?.map((user, index) => (
                <TooltipAvatar key={index} name={user.name} src={user.src} />
              )) || []}
            </AvatarGroup>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? 'Less' : 'More'}
            </Button>
          </div>
        </div>
        <hr />
        <p>
          Form:{' '}
          <a href={props.form}>
            {' '}
            <span> {props.form} </span>{' '}
          </a>
        </p>
      </ChakraProvider>
    </div>
  );
}

export default Company;
