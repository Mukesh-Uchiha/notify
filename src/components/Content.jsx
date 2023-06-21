<<<<<<< HEAD
import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import Company from "./Company";
import companyDetails from "../companyDetails";
function Content() {
  return (
    <ChakraProvider>
      <Container className="MainContainer" maxW="container.sm">
        <SearchBar />

        {companyDetails.map((items, index) => (
          <Company
            key={index}
            Companyname={items.Companyname}
            Roles={items.Roles}
            Salary={items.Salary}
            Location={items.Location}
            Eligibilty={items.Eligibilty}
            Bound={items.Bound}
            Internship={items.Internship}
            Deadline={items.Deadline}
            form={items.form}
            usersDetails={items.users}
          />
        ))}
=======
import * as React from 'react';
import {
  Checkbox,
  ChakraProvider,
  Container,
  Avatar,
  AvatarGroup,
  Tooltip,
} from '@chakra-ui/react';
import { Button } from '@mui/base';

function Content() {
  const users = [
    { name: 'Christian Nwamba', src: 'https://bit.ly/ryan-florence' },
    { name: 'Ryan Florence', src: 'https://bit.ly/sage-adebayo' },
    { name: 'Segun Adebayo', src: 'https://bit.ly/kent-c-dodds' },
    { name: 'Kent Dodds' },
    { name: 'Prosper Otemuyiwa', src: 'https://bit.ly/prosper-baba' },
  ];
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  const TooltipAvatar = (props) => (
    <Tooltip label={props.name}>
      <Avatar {...props} />
    </Tooltip>
  );
  return (
    <ChakraProvider>
      <Container className="MainContainer" maxW="container.sm">
        <div className="CompanyBox">
          <h1>CompanyName </h1>
          <hr />
          <div className="FlexContainer">
            <div className="CompanyBoxLhs">
              <p>Roles 👨‍💼: SDE</p>
              <p>Salary 💸: 6 lpa</p>
              <p>Eligibilty🎓 : 10 60%</p>
              <p>Location 📌: Chennai</p>
              <p>Bound : 2 years</p>
              <p>Internship 🗿: 2 years</p>
            </div>
            <div className="CompanyBoxRhs">
              <Checkbox colorScheme="red"> Register </Checkbox>
              <AvatarGroup size="md" max={show ? 5 : 2}>
              {users.map((user, index) => (
          <TooltipAvatar key={index} name={user.name} src={user.src} />
        ))}
              </AvatarGroup>
              <Button size="sm" onClick={handleToggle} mt="1rem">
                Show {show ? 'Less' : 'More'}
              </Button>
            </div>
          </div>
          <hr />
          <p>
            Form: <span>https://colorhunt.co/palettes/popular</span>
          </p>
        </div>
>>>>>>> ea3f5a90dfd8899e2b725172f5c2a759abefd0ca
      </Container>
    </ChakraProvider>
  );
}

export default Content;
