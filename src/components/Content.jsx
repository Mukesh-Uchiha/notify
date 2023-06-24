import * as React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import companyDetails from '../companyDetails';
import Company from './Company';
function Content() {
  return (
    <ChakraProvider>
      <Container className="MainContainer" maxW="container.sm">
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
      </Container>
    </ChakraProvider>
  );
}

export default Content;
