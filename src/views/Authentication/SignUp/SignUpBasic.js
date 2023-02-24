
import React from "react";
// Chakra imports
import {
  Box,
  Button,
  DarkMode,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Switch,
  Text,
} from "@chakra-ui/react";

// Assets
import basic from "assets/img/basic-auth.png";

// Custom components
import Footer from "components/Footer/Footer";
import GradientBorder from "components/GradientBorder/GradientBorder";

// Icons

function SignUpBasic() {
  const titleColor = "white";
  const textColor = "gray.400";
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>

      <Flex
        alignItems='center'
        justifyContent='start'
        style={{ userSelect: "none" }}
        flexDirection='column'
        mx={{ base: "auto" }}
        w={{ base: "100%", md: "50%", lg: "42%" }}>
        <Flex
          direction='column'
          textAlign='center'
          justifyContent='center'
          align='center'
          mt={{ sm: "50px", md: "120px", lg: "100px" }}
          mb='50px'
          mx='10px'>
          <Text
            fontSize='4xl'
            lineHeight='39px'
            color='white'
            fontWeight='bold'>
            Bem-vindo ao ThunderBot!
          </Text>
          <Text
            fontSize='md'
            color='white'
            fontWeight='500'
            mt='10px'
            w={{ base: "100%", md: "90%", lg: "90%", xl: "70%" }}>
          Cadastre-se para ter acesso ao melhor conteúdo de apostas de futebol!
          </Text>
        </Flex>
        <GradientBorder
          p='2px'
          me={{ base: "none", lg: "30px", xl: "none" }}
          mb={{ base: "50px", lg: "150px" }}>
          <Flex
            background='transparent'
            borderRadius='30px'
            direction='column'
            p='40px'
            minW={{ base: "unset", md: "430px", xl: "450px" }}
            w='100%'
            mx={{ base: "0px" }}
            bg={{
              base: "rgb(19,21,56)",
            }}>
  <Flex justifyContent='center'>
  <Box boxSize='sm'
  
            w={{ lg: "120px", md: "120px", sm: "180px" }}
            h={{ lg: "100px", md: "160px", sm: "160px" }}>
            <Image
              src='https://i.imgur.com/9G7DNMx.png' />
            </Box>
            </Flex>
            <FormControl>
              <FormLabel
                color={titleColor}
                ms='4px'
                fontSize='sm'
                fontWeight='500'>
                Nome
              </FormLabel>

              <GradientBorder
                mb='24px'
                h='50px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='text'
                  placeholder='Seu nome'
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms='4px'
                fontSize='sm'
                fontWeight='500'>
                Email
              </FormLabel>
              <GradientBorder
                mb='24px'
                h='50px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='email'
                  placeholder='Seu endereço de email'
                />
              </GradientBorder>
              <FormLabel
                color={titleColor}
                ms='4px'
                fontSize='sm'
                fontWeight='500'>
                Senha
              </FormLabel>
              <GradientBorder
                mb='24px'
                h='50px'
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius='20px'>
                <Input
                  color={titleColor}
                  bg={{
                    base: "rgb(19,21,54)",
                  }}
                  border='transparent'
                  borderRadius='20px'
                  fontSize='sm'
                  size='lg'
                  w={{ base: "100%", md: "346px" }}
                  maxW='100%'
                  h='46px'
                  type='password'
                  placeholder='Sua senha'
                />
              </GradientBorder>
    
              <Button
                variant='brand'
                fontSize='10px'
                type='submit'
                w='100%'
                h='45'
                mb='20px'>
                Cadastrar
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
               Já tem uma conta?
                <Link
                  color={titleColor}
                  as='span'
                  ms='5px'
                  href='#'
                  fontWeight='bold'>
                  Ir para o login
                </Link>
              </Text>
            </Flex>
          </Flex>
        </GradientBorder>
      </Flex>

    </Flex>
  );
}

export default SignUpBasic;
