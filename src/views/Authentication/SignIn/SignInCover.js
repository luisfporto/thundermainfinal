import React from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Image,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";
import signInImage from "assets/img/signInImage.png";
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";


function SignInCover() {
  let history = useHistory();
  const titleColor = "white";
  const textColor = "gray.400";
  return (
    <Flex position='relative'>
      <Flex
        minH='100vh'
        h={{ base: "120vh", lg: "fit-content" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        pt={{ sm: "25px", md: "0px" }}
        flexDirection='column'
        me={{ base: "auto", lg: "50px", xl: "auto" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px='50px'>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}>
              <Flex 
              justifyContent='center'>

            <Box boxSize='sm'
  
  w={{ lg: "0px", md: "0px", sm: "180px" }}
  h={{ lg: "0px", md: "0px", sm: "160px" }}>
    
  <Image
    src='https://i.imgur.com/9G7DNMx.png' />
  </Box>
              </Flex>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Login
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Digite seu CPF cadastrado na compra
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='500' color='white'>
                CPF
              </FormLabel>
              <GradientBorder
                mb='24px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color='white'
                  bg={{ base: "rgb(19,21,54)", lg: "rgb(19,21,54)" }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  placeholder='Digite seu CPF'
                />
              </GradientBorder>
            </FormControl>           
            <Button
              variant='brand'
              fontSize='10px'
              type='submit'
              w='100%'
              h='45'
              mb='20px'
              onClick={() => {
                history.push('/admin')
                console.log('Passou aqui')
              }}>
              ENTRAR
            </Button>

          </Flex>
        </Flex>
        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='80px'>
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX='hidden'
          h='100%'
          maxW={{ md: "50vw", lg: "50vw" }}
          minH='100vh'
          w='960px'
          position='absolute'
          left='0px'>
          <Box
            bgImage={signInImage}
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            position='absolute'>
            <Text
              textAlign='center'
              color='white'
              letterSpacing='8px'
              fontSize='20px'
              fontWeight='500'>
              Powered by DoctorTips
            </Text>
            <Box boxSize='sm'
  
  w={{ lg: "120px", md: "120px", sm: "180px" }}
  h={{ lg: "100px", md: "160px", sm: "160px" }}>
  <Image
    src='https://i.imgur.com/9G7DNMx.png' />
  </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignInCover;
