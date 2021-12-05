import { Box, Flex, Text, Image } from "@chakra-ui/react";


interface BannerContinentProps {
  imageBannerSource: string;
  continentName: string;
}

export function BannerContinent(
  { imageBannerSource, continentName }: BannerContinentProps
){
  return (
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1440}
      maxHeight="500" 
      mx="auto"
      justifyContent="flex-start"
      alignItems="flex-end"
      bgImage={imageBannerSource}
      px="140"
      pb="59"
    >
      <Box color="gray.50">
        <Text fontWeight="semibold" fontSize="48px">{continentName}</Text>
      </Box>
    </Flex>
  );
}