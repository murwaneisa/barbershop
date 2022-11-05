import { Heading, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

export const FooterHeading = (props) => (
  <Heading
    as="h4"
    color="primary_text"
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);
