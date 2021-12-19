import { Flex, Box} from "@chakra-ui/react"
import {Type} from './Type'

export function TripStyles(){
  
  return(
   
    <>
    <Flex
     w="100%"
     px={["12","20"]}
     flexWrap="wrap"
     justify="space-between"
     mt={["9","28"]}
    >
      <Type icon="cocktail" text="vida noturna" />
      <Type icon="beach" text="praia" />
      <Type icon="building" text="moderno" />
      <Type icon="museum" text="clássico" />
      <Type icon="earth" text="e mais..." />
  </Flex>
     <Box w={["60px","90px"]} mx="auto" h="2px" bg="gray.700" my={["9","20"]} />
  </>
         
    
  );
}