import logo from "@/assets/logo-without-text.png";
import styles from "@/utils/styles";
import { HStack, Heading, HeadingProps, Image } from "@chakra-ui/react";

interface Props {
  headingProps?: HeadingProps;
}

function Logo({ headingProps }: Props) {
  return (
    <HStack className={styles.animate.onloadFast} justifyContent="center">
      <Image src={logo} w={45} alt="MavenCode Logo" />
      <Heading
        fontSize="2xl"
        fontWeight={900}
        fontFamily="body"
        {...headingProps}
      >
        MAVENCODE
      </Heading>
    </HStack>
  );
}

export default Logo;
