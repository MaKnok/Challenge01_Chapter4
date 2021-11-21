import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import Link from "next/link";

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

export default function ContinentsSlides () {
  return (
    <>
      <Box mt="52px">
          <Text fontSize="36px" lineHeight="54px" fontWeight="medium" color="gray.600" textAlign="center">
            Vamos nessa? <br/> Então escolha o seu continente
          </Text>
      </Box>

      <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mt="52px"
      mb={["5", "10"]}
      h={["250px", "450px"]}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ 
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', }}
          pagination={{ 
            clickable: true,
            type: 'bullets'
          }}
          autoplay={{
            delay: 4000,
          }}
          style={{ width: "100%", flex: "1" }}
        >
          <Box className="swiper-button-next"></Box>
          <Box className="swiper-button-prev"></Box>
          <SwiperSlide>

            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url(images/europe.svg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >

            <Link href="/continent/europe">
              <a href="">
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
            
          </SwiperSlide>

          <SwiperSlide>América do Norte</SwiperSlide>
          <SwiperSlide>América do Sul</SwiperSlide>
          <SwiperSlide>Ásia</SwiperSlide>
          <SwiperSlide>África</SwiperSlide>
          <SwiperSlide>Oceania</SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
};
