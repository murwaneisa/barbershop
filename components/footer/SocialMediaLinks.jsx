import { ButtonGroup, IconButton } from "@chakra-ui/react";
import * as React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" {...props}>
    <IconButton
      as="a"
      href="https://www.facebook.com/EboKrdumofficial"
      aria-label="Facebook"
      color="blue.400"
      icon={<FaFacebook fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.instagram.com/ebokrdum/"
      aria-label="Instagram"
      color="#E1306C"
      icon={<FaInstagram fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://twitter.com/EKrdum"
      aria-label="Twitter"
      color="blue.300"
      icon={<FaTwitter fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="https://www.youtube.com/channel/UCtQCeThNAGW_5MSRdFYX2bQ"
      aria-label="YouTube"
      color="#FF0000"
      icon={<FaYoutube fontSize="20px" />}
    />
  </ButtonGroup>
);
