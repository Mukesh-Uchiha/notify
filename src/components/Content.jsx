import * as React from "react";
import {
  Checkbox,
  ChakraProvider,
  Container,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Collapse,
  Tooltip,
} from "@chakra-ui/react";
import { Button } from "@mui/base";

function Content() {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
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
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                  bg="#00ADB5"
                  borderColor="#222831"
                  borderWidth="3px"
                  label="Ryan Florence"
                  textTransform="capitalize"
                />

                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                  bg="#00ADB5"
                  borderColor="#222831"
                  borderWidth="3px"
                />
                <Avatar
                  name="Kent Dodds"
                  src="https://bit.ly/kent-c-dodds"
                  bg="#00ADB5"
                  borderColor="#222831"
                  borderWidth="3px"
                />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                  bg="#00ADB5"
                  borderColor="#222831"
                  borderWidth="3px"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                  bg="#00ADB5"
                  borderColor="#222831"
                  borderWidth="3px"
                />
              </AvatarGroup>
              <Button size="sm" onClick={handleToggle} mt="1rem">
                Show {show ? "Less" : "More"}
              </Button>
            </div>
          </div>
          <hr />
          <p>
            Form: <span>https://colorhunt.co/palettes/popular</span>
          </p>
        </div>
      </Container>
    </ChakraProvider>
  );
}

export default Content;
