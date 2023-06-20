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
      </Container>
    </ChakraProvider>
  );
}

export default Content;
