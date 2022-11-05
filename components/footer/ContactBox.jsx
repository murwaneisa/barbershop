import { Box, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";

export const ContactBox = (props) => {
  return (
    <Box>
      <Stack spacing="4">
        <FooterHeading>Contacts</FooterHeading>
        <Text color="primary_text">
          <a href="mailto:booking@ebokrdum.com">Tataamir55@gmail.com</a>
        </Text>
        <Text color="primary_text">
          <a href="tel:+46737401711">+33 605 66 93 08</a>
        </Text>
      </Stack>
    </Box>
  );
};
