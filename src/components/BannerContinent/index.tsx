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
      h={["150px","500px"]} 
      mx="auto"
      justifyContent={["center","flex-start"]}
      alignItems={["center","flex-end"]}
      bgImage={imageBannerSource}
      bgSize="cover"
      bgRepeat="no-repeat"
      px={["0","20"]}
      pb={["0","59"]}
    >
      <Box color="gray.50">
        <Text fontWeight="semibold" fontSize={["28px","48px"]}>{continentName}</Text>
      </Box>
    </Flex>
  );
}