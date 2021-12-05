import { Flex, Divider, Text, Box } from "@chakra-ui/react";
import {Banner} from "../components/Banner";
import ContinentsSlides from "../components/ContinentsSlides";
import { Header } from "../components/Header";
import { TripStyles } from "../components/TripStyles";


export default function Home() {
  return (
    <Flex direction="column" alignItems="center">

        <Header/>
        <Banner/>
        <TripStyles/>

        <Divider orientation="horizontal" w="90px" mt="20" borderColor="gray.600" fontWeight="semibold" borderWidth="2px"/>

        <ContinentsSlides/>

    </Flex>
  );
}
