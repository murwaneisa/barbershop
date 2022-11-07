import { Box, Stack, StackDivider } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ContactBox } from "./ContactBox";
import { Copyright } from "./Copyright";
import { LinkGrid } from "./LinkGrid";
import { SocialMediaLinks } from "./SocialMediaLinks";

// Design and Code for Footer attributed to Chakra UI Pro free template: https://pro.chakra-ui.com/components/marketing/footers

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      w="100vw"
      py="1"
      px={{
        base: "4",
        md: "8",
      }}
      bgColor="secondary"
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          spacing={{
            base: "10",
            lg: "28",
          }}
          alignItems="center"
        >
          <Box>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="Ebo krdum logo"
                  width={250}
                  height={250}
                />
              </a>
            </Link>
          </Box>
          <Stack
            direction={{
              base: "column",
              md: "row",
            }}
            spacing={{
              base: "10",
              md: "20",
            }}
          >
            <LinkGrid
              spacing={{
                base: "10",
                md: "20",
                lg: "28",
              }}
              flex="1"
            />
            <ContactBox
              width={{
                base: "full",
                md: "sm",
              }}
            />
          </Stack>
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Copyright />
          <SocialMediaLinks />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
