import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import Link from "next/link";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function ContinentsSlides () {
  return (
    <>
      <Box mt="13">
          <Text fontSize={["20px","36px"]} lineHeight={["30px","54px"]} fontWeight="medium" color="gray.600" textAlign="center">
            Vamos nessa? <br/> Então escolha o seu continente
          </Text>
      </Box>

      <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mt={["5", "13"]}
      mb={["5", "10"]}
      h={["250px", "450px"]}
      px={["0", "20"]}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ 
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', }}
          pagination={{ 
            clickable: true,
            type: 'bullets'
          }}
          scrollbar={{ draggable: true }}
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

         <SwiperSlide>

            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url(images/northamerica.svg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
                bgPosition="center"
            >

            <Link href="/continent/northamerica">
            <a href="">
            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              color="gray.100"
              fontWeight="bold"
            >
            América do Norte
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.300"
              fontSize={["0.8rem", "1xl", "2xl"]}
              mt={["2", "4"]}
            >
            Um universo cosmopolita.
            </Text>
            </a>
            </Link>
            </Flex>

         </SwiperSlide>

         <SwiperSlide>

            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url(images/southamerica.svg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >

            <Link href="/continent/southamerica">
            <a href="">
            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              color="gray.100"
              fontWeight="bold"
            >
              América do Sul
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.300"
              fontSize={["0.8rem", "1xl", "2xl"]}
              mt={["2", "4"]}
            >
            Beleza natural exuberante.
            </Text>
            </a>
            </Link>
            </Flex>

          </SwiperSlide>

          <SwiperSlide>

            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url(images/asia.svg)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >

            <Link href="/continent/asia">
            <a href="">
            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              color="gray.100"
              fontWeight="bold"
            >
            Ásia
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.300"
              fontSize={["0.8rem", "1xl", "2xl"]}
              mt={["2", "4"]}
            >
            Os mistérios do oriente.
            </Text>
            </a>
            </Link>
            </Flex>

          </SwiperSlide>

          <SwiperSlide>

          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(images/africa.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >

          <Link href="/continent/africa">
          <a href="">
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
          África
          </Heading>
          <Text
          fontWeight="bold"
          color="gray.300"
          fontSize={["0.8rem", "1xl", "2xl"]}
          mt={["2", "4"]}
          >
          Os safaris mais incríveis.
          </Text>
          </a>
          </Link>
          </Flex>

          </SwiperSlide>

          <SwiperSlide>

          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(images/oceania.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >

          <Link href="/continent/oceania">
          <a href="">
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            color="gray.100"
            fontWeight="bold"
          >
            Ocêania
          </Heading>
          <Text
          fontWeight="bold"
          color="gray.300"
          fontSize={["0.8rem", "1xl", "2xl"]}
          mt={["2", "4"]}
          >
          O encontro da natureza com o futurismo.
          </Text>
          </a>
          </Link>
          </Flex>

          </SwiperSlide>

       </Swiper>
      </Flex>
    </>
  );
};
