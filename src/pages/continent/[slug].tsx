import { Flex, Text, Box, useDisclosure, Link } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import { Header } from "../../components/Header";
import { BannerContinent } from "../../components/BannerContinent";
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { CardCities } from "../../components/CardCities";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"

interface Continent{
  data: {
    imagebannersource: {
      url: string;
    };
    continentname: string; 
    description: string;
    countriesnumber: number;
    languagesnumber: number;
    citiesnumber: number;
    destinies:{
      imagecity100source: {
        url: string;
      }; 
      cityname: string;
      countryname: string;
      countrycode: string;
    }[]
  }
}

interface ContinentProps{
  continent:Continent;
}

export default function Continent(
  { continent }: ContinentProps
) {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const { destinies } = continent.data;

  const cardCities = destinies.map((destiny,i) => 
      <CardCities 
      key={`destiny-${i}`}
      imageCity100Source={ destiny.imagecity100source.url } 
      cityName={ destiny.cityname } 
      countryName={ destiny.countryname } 
      countryCode={ destiny.countrycode }/>
  )

  var row1 = [];
  for (var i = 0; i <= 3; i++) {
    row1.push(cardCities[i]);
  }

  var row2 = [];
  for (var i = 4; i < cardCities.length; i++) {
    row2.push(cardCities[i]);
  }

  return (
    <Flex direction="column">
      <Header />
      <BannerContinent imageBannerSource={continent.data.imagebannersource.url} continentName={continent.data.continentname}/>

      <Flex 
        direction={["column","row"]}
        align="center"
        px={["4","20"]}
        mt={["6","20"]}
        mb={["8","20"]}
      >
          <Text 
            w={["343px","600px"]} 
            fontWeight="normal" 
            fontSize={["14px","24px"]}
            textAlign="justify"
            textJustify= "inter-word"
            lineHeight={["21px","36px"]}
            color="gray.600"
          >
            { RichText.asText(continent.data.description) }
          </Text>

          <Flex 
          w={["343px","490px"]}
          mt={["4","0"]}
          ml={["0","70px"]}
          direction="row"
          justifyContent="space-between"
          >

              <Flex 
                direction="column"
                alignItens="center"
              > 
                  <Box
                  as="span"
                  fontSize={["24px","48px"]}
                  fontWeight="semibold"
                  color="yellow.400"
                  textAlign={["left","center"]}
                  >
                  {continent.data.countriesnumber}
                  </Box>

                  <Box
                  as="span"
                  fontSize={["18px","24px"]}
                  fontWeight={["normal","semibold"]}
                  color="gray.600"
                  textAlign="center"
                  mt={["-1","-3"]}
                  >
                  países
                  </Box>

              </Flex>

             
              <Flex 
                direction="column"
                alignItens="center"
              > 
                  <Box
                  as="span"
                  fontSize={["24px","48px"]}
                  fontWeight="semibold"
                  color="yellow.400"
                  textAlign={["left","center"]}
                  >
                  {continent.data.languagesnumber}
                  </Box>

                  <Box
                  as="span"
                  fontSize={["18px","24px"]}
                  fontWeight={["normal","semibold"]}
                  color="gray.600"
                  textAlign="center"
                  mt={["-1","-3"]}
                  >
                  línguas
                  </Box>

              </Flex>

              <Flex direction="column">

                <Flex 
                  direction="column"
                > 
                  <Box
                  as="span"
                  fontSize={["24px","48px"]}
                  fontWeight="semibold"
                  color="yellow.400"
                  textAlign={["left","center"]}
                  >
                  {continent.data.citiesnumber}
                  </Box>
                  <Flex direction="row">
                  <Box
                  as="span"
                  fontSize={["18px","24px"]}
                  fontWeight={["normal","semibold"]}
                  color="gray.600"
                  textAlign="center"
                  mt={["-1","-3"]}
                  >
                  cidades +100 
                  </Box>
                  <Popover
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    placement="right"
                    closeOnBlur={false}
                    autoFocus={false}
                    >
                      <PopoverTrigger>
                          <InfoOutlineIcon w={["2.5","4"]} h={["2.5","4"]} color="gray.500" ml="5px"/>
                      </PopoverTrigger>
                      <PopoverContent borderColor="yellow.400">
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader fontWeight="medium">Mais informações</PopoverHeader>
                          <PopoverBody>Veja mais detalhes sobre todos os destinos <Link href="http://www.google.com" isExternal fontWeight="bold" color="yellow.400">aqui</Link></PopoverBody>
                      </PopoverContent>
                  </Popover>
                  </Flex>

                  </Flex>

              </Flex>

          </Flex>
          
      </Flex>

      <Flex 
        direction="column"
        align="left"
        px={["4","20"]}
        mb={"10"}
      >
        <Text fontSize={["24px","36px"]} color="gray.600" fontWeight="medium" mb={["0","10"]}>Cidades +100</Text>
        <Flex 
        direction={["column","row"]}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
       >
       {row1}
       </Flex>
       <Flex 
        direction={["column","row"]}
        align="center"
        justifyContent="space-between"
        w="100%"
        mt={["0","16"]}
       >
       {row2}
       </Flex>
      
        
      </Flex>

    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const prismic = getPrismicClient();

  const continents =  await prismic.query(
    Prismic.Predicates.at('document.type', 'continent')
  );
  
  const slugs = continents.results.reduce((arr, continent) => {
    arr.push(continent.uid);
    return arr;
  }, []);

  const params = slugs.map(slug => {
    return {
      params: { slug },
    };
  });

  return {
    paths: params,
    fallback: true 
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const prismic = getPrismicClient();
    const { slug } = params;

    const response = await prismic.getByUID('continent', String(slug), {});
    const continent = response;

    console.log(continent);
  
    return {
      props: { continent }, 
    }
}