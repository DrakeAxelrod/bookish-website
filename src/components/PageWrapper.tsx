import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main" flex={1}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default PageWrapper;
