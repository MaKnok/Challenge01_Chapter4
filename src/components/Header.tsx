import { Flex, Image, Box } from '@chakra-ui/react'

export function Header() {
  return(
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1440}
      h="100"
      py="27"
      mx="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
          <Image src="/images/logo.svg" alt="worldtrip" w="46,015" />
      </Box>
    </Flex>

  );
}