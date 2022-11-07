import { ButtonGroup, IconButton } from "@chakra-ui/react";
import * as React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="Facebook"
      color="blue.400"
      icon={<FaFacebook fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Instagram"
      color="#E1306C"
      icon={<FaInstagram fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      color="blue.300"
      icon={<FaTwitter fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="YouTube"
      color="#FF0000"
      icon={<FaYoutube fontSize="20px" />}
    />

    <IconButton
      as="a"
      href="#"
      aria-label="YouTube"
      _hover={{ color: "#000000", bg: "#ffffff" }}
      color="#ffffff"
      icon={<FaTiktok fontSize="18px" />}
    />
  </ButtonGroup>
);
