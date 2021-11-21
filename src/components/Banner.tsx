import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function Banner(){
  return (

    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1440}
      h="335"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      bgImage="/images/background.svg"
      px="140"
    >
        <Box color="gray.50">
            <Text fontWeight="medium" fontSize="36px" lineHeight="54px">5 Continentes, <br /> infinitas possibilidades.</Text>
            <Box w="80%" mt="5">
                <Text fontSize="20px" lineHeight="30px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
            </Box>
        </Box>

        <Box mt="76" pt="10">
            <Image src="images/airplane.svg"></Image>
        </Box>
    </Flex>
  );
}