import React from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider, ButtonGroup, Button } from "@chakra-ui/react";
function SideMenu({ signupButtonValue }) {
  const navigate = useNavigate();
  const UserName = "Mukesh";
  return (
    <div
      className={`sideMenu ${signupButtonValue ? "sideMenuOn" : "sideMenuOff"}`}
    >
      <p style={{ fontSize: "large" }}>
        {" "}
        Konnichiwa , <b> {UserName} </b>san
      </p>
      <div className="CompanyStatus">
        <div className="RegisteredCompany">
          <p style={{ fontSize: "medium" }}>Registered co</p>
          <div>
            {" "}
            <ul>
              <li>Company name </li>
              <li>Company name </li>
              <li>Company name </li>
              <li>Company name </li>
              <li>Company name </li>
              <li>Company name </li>
            </ul>
          </div>
        </div>
        <div className="NotRegisteredCompany">
          <p style={{ fontSize: "medium" }}> Not Registered co</p>
          <div>
            {" "}
            <ul>
              <li>Company name </li>
              <li>Company name </li>
              <li>Company name </li>
              <li>Company name </li>
            </ul>
          </div>
        </div>
      </div>
      <ChakraProvider>
        <ButtonGroup spacing="6">
          <Button
            onClick={() => {
              navigate("/");
            }}
            colorScheme="teal"
            variant="outline"
            width={"200px"}
          >
            {" "}
            <a href="#">Logout</a>
          </Button>
        </ButtonGroup>
      </ChakraProvider>
    </div>
  );
}

export default SideMenu;
