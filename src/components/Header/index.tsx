import { Flex, Grid, Image, Box, Icon } from '@chakra-ui/react'
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return(
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1440}
      h={["50px","100px"]}
      py="27"
      mx="auto"
      justifyContent="flex-start"
      alignItems="center"
      px="20"
    >

     {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}

        <Grid
        h={["20px","46px"]}
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
      >
       
        <Box>
            <Image src="/images/logo.svg" alt="worldtrip" w={["81px", "184px"]}  justifySelf="center"
            gridColumn="2"/>
        </Box>
    
      </Grid>

    </Flex>

  );
}