import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "@/assets/logo-without-text.png";

function Logo() {
  return (
    <HStack justifyContent="center">
      <Image src={logo} w={45} alt="MavenCode Logo" />
      <Heading fontWeight={900} fontFamily="body" fontSize="2xl">
        MAVENCODE
      </Heading>
    </HStack>
  );
}

export default Logo;
