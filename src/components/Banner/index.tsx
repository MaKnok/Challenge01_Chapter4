import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner(){

  const isWideVersion = useBreakpointValue({ base: false, md: true })

  return (

    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1440}
      h={["163","335"]}
      mx="auto"
      justifyContent="center"
      alignItems="center"
      bgImage="/images/background.svg"
      px={["4","20"]}
    >
        <Box color="gray.50">
            <Text fontWeight="medium" fontSize={["20px","36px"]} lineHeight={["30px","54px"]}>5 Continentes, <br /> infinitas possibilidades.</Text>
            <Box w={["100%","80%"]} mt={["2","5"]}>
                <Text fontSize={["14px","20px"]} lineHeight={["21px","30px"]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Box>
        </Box>

        { isWideVersion &&
          <Box mt="76" pt="10">
            <Image src="images/airplane.svg"></Image>
          </Box>
        }

    </Flex>
  );
}