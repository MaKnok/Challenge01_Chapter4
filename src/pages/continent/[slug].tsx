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
    imageBannerSource: {
      url: string;
    };
    continentName: string; 
    description: string;
    countriesNumber: number;
    languagesNumber: number;
    citiesNumber: number;
    destinies:{
      imageCity100Source: {
        url: string;
      }; 
      cityName: string;
      countryName: string;
      countryCode: string;
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
      imageCity100Source={ destiny.imageCity100Source.url } 
      cityName={ destiny.cityName } 
      countryName={ destiny.countryName } 
      countryCode={ destiny.countryCode }/>
  )

  return (
    <Flex direction="column">
      <Header />
      <BannerContinent imageBannerSource={continent.data.imageBannerSource.url} continentName={continent.data.continentName}/>

      <Flex 
        direction="row"
        px="140"
        mt="20"
        mb="20"
      >
          <Text 
            w="600px" 
            fontWeight="normal" 
            fontSize="24px" 
            textAlign="justify"
            textJustify= "inter-word"
            lineHeight="36px" 
            color="gray.600"
          >
            { RichText.asHTML(continent.data.description) }
          </Text>

          <Flex 
          w="490px"
          ml="70px"
          direction="row"
          justifyContent="space-between"
          >

              <Flex 
                direction="column"
                alignItens="center"
              > 
                  <Box
                  as="span"
                  fontSize="48px"
                  fontWeight="semibold"
                  color="yellow.400"
                  textAlign="center"
                  >
                  {continent.data.countriesNumber}
                  </Box>

                  <Box
                  as="span"
                  fontSize="24px"
                  fontWeight="semibold"
                  color="gray.600"
                  textAlign="center"
                  mt="-3"
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
                  fontSize="48px"
                  fontWeight="semibold"
                  color="yellow.400"
                  textAlign="center"
                  >
                  {continent.data.languagesNumber}
                  </Box>

                  <Box
                  as="span"
                  fontSize="24px"
                  fontWeight="semibold"
                  color="gray.600"
                  textAlign="center"
                  mt="-3"
                  >
                  línguas
                  </Box>

              </Flex>

              <Flex direction="column">

                <Flex 
                  direction="column"
                  alignItens="center"
                > 
                  <Box
                  as="span"
                  fontSize="48px"
                  fontWeight="semibold"
                  color="yellow.400"
                  textAlign="center"
                  >
                  {continent.data.citiesNumber}
                  </Box>
                  <Flex direction="row">
                  <Box
                  as="span"
                  fontSize="24px"
                  fontWeight="semibold"
                  color="gray.600"
                  textAlign="center"
                  mt="-3"
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
                          <InfoOutlineIcon w={4} h={4} color="gray.500" ml="5px"/>
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

      {cardCities}

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