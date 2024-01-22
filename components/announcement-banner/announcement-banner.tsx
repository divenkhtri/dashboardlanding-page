import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerDescription,
  BannerTitle,
  Button,
} from "@saas-ui/react";
import { FiArrowRight } from "react-icons/fi";

export interface AnnouncementBannerProps {
  title: string;
  description: string;
  href: string;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = (
  props
) => {
  const { title, description, href } = props;
  const bg = useColorModeValue("white", "gray.900");
  if (!title) {
    return null;
  }

  return <></>;
};
