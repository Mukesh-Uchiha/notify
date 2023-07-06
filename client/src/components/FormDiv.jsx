import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../css/fade.css";

function FormDiv({ statusButtonValue, onStatusButtonClick }) {
  const [eligibility, ChangeEligibility] = useState(false);
  const [throughout, ChangeThroughout] = useState(false);
  const [Bound, ChangeBound] = useState(false);
  const formDetail = [
    { placeholder: "company name", label: "company " },
    { placeholder: "Enter the role(s)", label: " role" },
    { placeholder: "Enter the CTC ", label: "Salary" },
    { placeholder: "Enter the Location", label: "Company Location" },
    {
      placeholder: "Enter the last Date ",
      label: "Deadline",
      type: "datetime-local",
    },
  ];

  function HandleCheck(event) {
    const name = event.target.id;
    if (name === "eligibility") {
      return ChangeEligibility(!eligibility);
    } else if (name === "throughout") {
      return ChangeThroughout(!throughout);
    } else if (name === "Bound") {
      return ChangeBound(!Bound);
    }
  }

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!statusButtonValue) {
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
      }, 500);
    } else {
      timeoutId = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [statusButtonValue]);

  const handleOnCloseClick = () => {
    onStatusButtonClick(false);
  };

  return (
    <div
      className={`Form ${
        !statusButtonValue ? "slide-fade-enter" : "slide-fade-exit"
      }`}
      style={{ display: !isAnimating ? "block" : "none" }}
    >
      <div>
        <h1
          className="Formh1"
          style={
            statusButtonValue
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
            {formDetail.map((formDetail, index) => (
              <div key={index}>
                <FormControl isRequired>
                  <FormLabel className="Labels"> {formDetail.label}</FormLabel>
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
                <Switch id="eligibility" isRequred onChange={HandleCheck} />
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
                      If it not is through out{" "}
                    </FormLabel>
                    <Switch id="throughout" isRequred onChange={HandleCheck} />
                  </FormControl>
                  {throughout ? (
                    <FormControl display="flex" justifyContent="space-between">
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
                <Switch id="Bound" isRequred onChange={HandleCheck} />
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
                !isAnimating
                  ? { transform: "translate(0px, 0px)" }
                  : { transform: "translate(0px, 50px)" }
              }
            >
              Save
            </Button>
            <Button
              onClick={handleOnCloseClick}
              colorScheme="gray"
              style={
                !isAnimating
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
  );
}

export default FormDiv;
