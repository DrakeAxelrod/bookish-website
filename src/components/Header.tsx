import { Box, ButtonGroup, Flex, Heading, Icon, IconButton, Spacer } from "@chakra-ui/react";
import { FC } from "react";
import {
  FaTwitch,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaCrown,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  {
    name: "twitch",
    link: "https://www.twitch.tv/abookishreader",
    icon: FaTwitch,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/channel/UCHLNGqubi6GGYsTMS8uG1tg",
    icon: FaYoutube,
  },
  {
    name: "discord",
    link: "https://discord.gg/bfb8kS3",
    icon: FaDiscord,
  },
  {
    name: "twitter",
    link: "https://twitter.com/abookishreader",
    icon: FaTwitter,
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@abookishreader",
    icon: FaTiktok,
  },
  {
    name: "instagram",
    link: "https://instagram.com/abookishreader_",
    icon: FaInstagram,
  },
  {
    name: "throne",
    link: "https://jointhrone.com/u/abookishreader",
    icon: FaCrown,
  },
];
const Icons: FC = () => {
  return (
    <ButtonGroup>
      {socials.map((entry: any, i: number) => {
        return (
          <IconButton
            key={i}
            icon={<Icon as={entry.icon} />}
            href={entry.link}
            aria-label={entry.name}
            rel="noopener noreferrer"
            target="_blank"
          />
        );
      })}
    </ButtonGroup>
  );
};
const Logo: FC = () => {
  return (
    <Heading as="h1">
      Bookish
    </Heading>
  )
}
type HeaderProps = {};
const Header: FC<HeaderProps> = () => {
  return (
    <Flex direction="row" as="header">
      <Logo />
      <Spacer />
      <Icons />
    </Flex>
  );
};

export default Header;
