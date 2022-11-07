import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export const ContactBox = (props) => {
  return (
    <Box>
      <Stack spacing="4">
        <FooterHeading>Contacts</FooterHeading>
        <HStack direction="row">
          <HiOutlineMail size={25} color="#ffffff" />
          <Text color="primary_text">
            <a href="mailto:Tataamir55@gmail.com">Tataamir55@gmail.com</a>
          </Text>
        </HStack>
        <HStack direction="row">
          <HiOutlinePhone size={25} color="#ffffff" />
          <Text color="primary_text">
            <a href="tel:+33 605 66 93 08">+33 605 66 93 08</a>
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};
