import * as React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Avatar, ChakraProvider, Circle } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
function Headers() {
  return (
    <header>
      <h1>
        <NotificationsActiveIcon /> Notify
      </h1>
      <div className="lhs">
        <ChakraProvider>
          <Circle size="32px" bg="#00ADB5" color="white">
            <AddIcon />
          </Circle>
          <Avatar
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </ChakraProvider>
      </div>
    </header>
  );
}

export default Headers;
