import { Text } from "@chakra-ui/layout";
import * as React from "react";

export const Copyright = (props) => (
  <Text fontSize="sm" color="primary" {...props}>
    &copy; {new Date().getFullYear()} Talentinho249 All rights reserved.
  </Text>
);
