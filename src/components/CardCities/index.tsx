import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { generateKeyPair } from "node:crypto";
import ReactCountryFlag from "react-country-flag";

interface CardCitiesProps {
  imageCity100Source: string;
  cityName: string;
  countryName: string;
  countryCode: string;
}

export function CardCities({
  imageCity100Source,
  cityName,
  countryName,
  countryCode,
}: CardCitiesProps) {
  const textColorCity = useColorModeValue("gray.900", "gray.50");
  const textColorCountry = useColorModeValue("gray.750", "gray.200");

  return (
    <Flex 
    as="section" 
    direction="column"
    w="100%" 
    maxWidth={1440}
    h="auto" 
    mx="auto"
    mt={["5","0"]}
    justifyContent="flex-start"
    alignItems={["center","flex-start"]}
  >
    
    <Flex
      h="279px"
      w="256px"
      direction="column"
      border="1px solid rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
    >
      <Box>
        <img src={imageCity100Source} alt={cityName} />
      </Box>
      <Flex align="center" justify="space-between" my="5" px="6">
        <Box>
          <Text fontSize="20" color={textColorCity} fontWeight="600">
            {cityName}
          </Text>
          <Text color={textColorCountry} fontWeight="600">
            {countryName}
          </Text>
        </Box>
        <Box w="30px" h="30px" textAlign="center" borderRadius="full">
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
            }}
            title={countryName}
          />
        </Box>
      </Flex>
    </Flex>
  </Flex>
  );
}