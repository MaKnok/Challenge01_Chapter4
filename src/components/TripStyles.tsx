import { Flex, Box, Image, Text } from '@chakra-ui/react';

export function TripStyles(){
  return(

    <Flex 
      as="section" 
      w="100%" 
      maxWidth={1440}
      h="145"
      mx="auto"
      justifyContent="space-between"
      alignItems="center"
      px="140"
      mt="114"
    >
      <Flex
        direction="column"
        alignItems="center"
      >
          <Box>
            <Image src="/images/cocktail.svg" alt="cocktail" w="21,25" />
          </Box>

          <Box>
            <Text fontWeight="semibold" color="gray.600" mt="6" fontSize="24px">vida noturna</Text>
          </Box>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
      >
          <Box>
          <Image src="/images/beach.svg" alt="beach" w="21,25" />
          </Box>

          <Box>
            <Text fontWeight="semibold" color="gray.600" mt="6" fontSize="24px">praia</Text>
          </Box>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
      >
          <Box>
          <Image src="/images/building.svg" alt="building" w="21,25" />
          </Box>

          <Box>
            <Text fontWeight="semibold" color="gray.600" mt="6" fontSize="24px">moderno</Text>
          </Box>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
      >
          <Box>
          <Image src="/images/museum.svg" alt="museum" w="21,25" />
          </Box>

          <Box>
            <Text fontWeight="semibold" color="gray.600" mt="6" fontSize="24px">clássico</Text>
          </Box>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
      >
          <Box>
          <Image src="/images/earth.svg" alt="earth" w="21,25" />
          </Box>

          <Box>
            <Text fontWeight="semibold" color="gray.600" mt="6" fontSize="24px">e mais...</Text>
          </Box>
      </Flex>

    </Flex>
    
  );
}