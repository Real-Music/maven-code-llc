import logo from "@/assets/logo-without-text.png";
import styles from "@/utils/styles";
import { HStack, Heading, Image } from "@chakra-ui/react";

function Logo() {
  return (
    <HStack className={styles.animate.onloadFast} justifyContent="center">
      <Image src={logo} w={45} alt="MavenCode Logo" />
      <Heading fontWeight={900} fontFamily="body" fontSize="2xl">
        MAVENCODE
      </Heading>
    </HStack>
  );
}

export default Logo;
