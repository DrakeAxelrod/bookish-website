import { useColorMode, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle: FC = () => {
  const { toggleColorMode: toggleMode, colorMode } = useColorMode();
  return (
    <>
      <IconButton
        icon={
          colorMode === "light" ? (
            <FaMoon fontSize="1.75rem" />
          ) : (
            <FaSun fontSize="1.75rem" />
          )
        }
        _focus={{
          bgColor: "transparent",
          color: colorMode === "light" ? "blue.normal" : "yellow.normal",
          outlineColor: "inherit",
        }}
        _hover={{
          bgColor: "transparent",
          color: colorMode === "light" ? "blue.bright" : "yellow.bright",
        }}
        _active={{
          bgColor: "transparent",
          color: colorMode === "light" ? "blue.bright" : "yellow.bright",
        }}
        mx="0.5rem"
        alignSelf="center"
        variant="ghost"
        color={colorMode === "light" ? "blue.normal" : "yellow.normal"}
        aria-label="toggle dark and light mode"
        onClick={toggleMode}
      />
    </>
  );
};

export default ThemeToggle;
