import { Box, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px" color="primary_text">
      <FooterHeading mb="4">Menu</FooterHeading>
      <Stack>
        <Link href="/">Serives</Link>
        <Link href="/">Boutinge</Link>
        <Link href="/">Contactez</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
