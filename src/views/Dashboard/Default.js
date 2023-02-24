

import React from "react";
import generalBg from "assets/img/generalBg.png";
import { useHistory } from "react-router-dom";

import {
  ButtonGradientRight,
} from './style';
// Chakra imports
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  Badge,
  Flex,
  Image,
  Grid,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Button,
  Icon,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import Globe from "components/Globe/Globe";
import IconBox from "components/Icons/IconBox";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp, IoEllipsisHorizontal } from 'react-icons/io5';

import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "variables/charts";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";

// MUI


export default function Default() {
  let history = useHistory();
  const iconBoxInside = useColorModeValue("white", "white");
  return (

   <Box
   w='100%' pr='250px'>


     <Flex flexDirection="column" pt={{ base: "50px", sm: "0px", md: "20px" }} alignItems={{sm: "flex-start", lg: "center", md: "center"}}>
      <Flex flexDirection={{ sm: "column", md: "row", lg: "row" }} >
        <Stack direction={{ sm: "column", md: "row", lg: "row" }}
        pl='80px'>
          <Box boxSize='sm'
            w={{ lg: "120px", md: "120px", sm: "180px" }}
            h={{ lg: "160px", md: "160px", sm: "160px" }}>
            <Image
              src='https://i.imgur.com/9G7DNMx.png'/>
            </Box>
          <Text h={{ lg: "160px", md: "160px", sm: "0px" }}
            color="#fff" fontWeight="bold" fontSize="3xl" mb="30px" pt={{ sm: "0px", md: "25px", lg: "25px" }} mt={{ md: "30px", lg: "30px" }} ps="20px">
            Bem-vindo ao ThunderBot!
          </Text>
        </Stack>
      </Flex>
      <Stack
        direction="column"
        spacing="24px"
        w="100%"
        mb="24px"
        maxW={{ sm: "315px", md: "100%" }}
        zIndex="0"
      >
        {/* Mini Statistics */}
        <SimpleGrid
          minChildWidth={{ sm: "350px", lg: "250px" }}
          columns={{ sm: 1 }}
          spacing={3}
        >
          <Button
            h="80px"
            style={{ background: "linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)" }}
            w={{lg: '300px', md: '300px', sm: '350px'}}
            borderRadius='12px'
            transition='background .3s ease'
            bg='#FF7500'
            _hover={{
              bg: '#FF7500'
            }}
            _active={{
              bg: '#FF7500'
            }}
            me={{ base: 'none', lg: '20px' }}
            minW='135px'
            onClick={() => {
              history.push('/admin/applications/calendar')
              console.log('Passou aqui')
            }}>
            <Stack direction='row'>
              <Text pt="8px" fontSize='2xl' color='#fff' fontWeight='bold'>
                ENTRADAS LIVE
              </Text>
              <Image
                pt="3px"
                w="35px"
                src="https://img.icons8.com/ios/50/null/tv-show.png" />

            </Stack>

          </Button>
          <Button
            h="80px"
            style={{ background: "linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)" }}
            w={{lg: '300px', md: '300px', sm: '350px'}}

            borderRadius='12px'
            transition='background .3s ease'
            bg='#FF7500'
            _hover={{
              bg: '#FF7500'
            }}
            _active={{
              bg: '#FF7500'
            }}
            me={{ base: 'none', lg: '20px' }}
            minW='135px'
            onClick={() => {
              history.push('/admin/pages/profile/profile-projects')
              console.log('Passou aqui')
            }}>
            <Stack direction='row'>
              <Text pt="8px" fontSize='2xl' color='#fff' fontWeight='bold'>
                ESTATÍSTICAS
              </Text>
              <Image
                pt="3px"
                w="35px"
                src="https://static.thenounproject.com/png/1324046-200.png" />

            </Stack>

          </Button>
          <Button
            w={{lg: '300px', md: '300px', sm: '350px'}}

            h="80px"
            style={{ background: "linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)" }}
            borderRadius='12px'
            transition='background .3s ease'
            _hover={{
              bg: '#FF7500'
            }}
            _active={{
              bg: '#FF7500'
            }}
            me={{ base: 'none', lg: '20px' }}
            // leftIcon={<Icon color='white' as={FaCube} me='6px' />}
            // onClick={() => dispatch({ type: 'SWITCH_ACTIVE', payload: 'overview' })}
            minW='135px'>
            <Stack direction='row'>
              <Text pt="8px" fontSize='2xl' color='#fff' fontWeight='bold'>
                SEJA PRO              {/* BOTÃO PADRÃO */}
              </Text>
              <Image
                w="35px"
                src="https://img.icons8.com/ios-filled/50/null/popular-man.png" />
            </Stack>

            
          
          </Button>
        </SimpleGrid>
        <SimpleGrid
          minChildWidth={{ sm: "350px", lg: "120px" }}
          columns={{ sm: 1 }}
          spacing={2}
        >
          <Card h="110px">
            <CardBody h="25px">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                h="75px"
              >
                <Stat me="auto">
                  <StatLabel fontSize="large" color="gray.400" pt="3px" pb="1px">
                    Greens de hoje
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize="5xl" color="#fff">
                      23
                    </StatNumber>
                  </Flex>
                </Stat>
              </Flex>
            </CardBody>
          </Card>
          <Card h="110px">
            <CardBody h="25px">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                h="75px"
              >
                <Stat me="auto">
                  <StatLabel fontSize="lg" color="gray.400" pb="2px">
                    Porcentagem do dia
                  </StatLabel>
                  <Flex>
                    <StatNumber fontSize="5xl" color="#fff">
                      87,2%
                    </StatNumber>
                  </Flex>
                </Stat>
              </Flex>
            </CardBody>
          </Card>
          <Card h="110px">
            <CardBody h="25px">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                h="75px"
              >
                <Stat me="auto">
                  <StatLabel fontSize="lg" color="gray.400" pb="2px">
                    Escanteios (PRO)
                  </StatLabel>

                  <StatNumber fontSize="5xl" color="#fff">
                    36
                  </StatNumber>
                </Stat>
              </Flex>
            </CardBody>
          </Card>
          <Card h="110px">
            <CardBody h="25px">
              <Flex
                flexDirection="row"
                align="center"
                justify="center"
                w="100%"
                h="75px"
              >
                <Stat me="auto">
                  <StatLabel fontSize="lg" color="gray.400" pb="2px">
                    % escanteios (PRO)
                  </StatLabel>

                  <StatNumber fontSize="5xl" color="#fff">
                    94,7%
                  </StatNumber>
                </Stat>

              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>

        <Stack direction={{ sm: "column", md: "row", lg: "row" }}>

          <Card
            // gridArea={{ md: '2 / 2 / 3 / 3', '2xl': 'auto' }}
            bgImage="https://i.imgur.com/of4vBjB.jpg"
            bgSize={{ lg: "450px", sm: "420px" }}
            w={{ sm: "350px", lg: "750px" }}
            h={{ sm: "400px", md: "320px", lg: "320px" }}

          >
            <Flex direction="column" align='center' h="100%">
              <Text
                color="#fff"
                fontSize="30px"
                fontWeight="bold"
                mb="3px"
              ></Text>
              <Text color="#fff" fontSize="sm" mb="auto"></Text>

              <Button

                w={{ sm: '270px', md: "380px", lg: "380px" }}
                h="40px"
                style={{ background: "linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%)" }}
                borderRadius='12px'
                transition='background .3s ease'
                // bgColor='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,46,1) 35%, rgba(0,212,255,1) 100%)'
                _hover={{
                  bg: '#FF7500'
                }}
                _active={{
                  bg: '#FF7500'
                }}
                me={{ base: 'none', lg: '20px' }}
                // leftIcon={<Icon color='white' as={FaCube} me='6px' />}
                // onClick={() => dispatch({ type: 'SWITCH_ACTIVE', payload: 'overview' })}
                minW={'135px'}
                onClick={() => {
                  window.location.href = 'https://premierleaguebrasil.com.br/codigo-promocional-betano/';
                  console.log('Passou aqui')
                }}>
                <Text fontSize="lg" color='#fff' fontWeight='bold'>
                  QUERO MEU BÔNUS
                </Text>
              </Button>
            </Flex>
          </Card>

          <Card gridArea={{ md: '2 / 2 / 3 / 3', '2xl':  'auto' }}
            w={{ sm: "350px", md: "470px", lg: "470px" }}
            h={{ md: "320px", lg: "320px" }}

          >
            <Flex direction='column'>
              <Flex justify='space-between' align='center' mb='40px'>
                <Text color='#fff' fontSize='lg' fontWeight='bold'>
                  Resultado semanal
                </Text>

              </Flex>
              <Flex direction={{ sm: 'column', md: 'row' }} justifyContent="center">
                <Flex direction='column' me={{ md: '6px', lg: '52px' }} mb={{ sm: '16px', md: '0px' }}>
                  <Flex
                    direction='column'
                    p='22px'
                    pe={{ sm: '22e', md: '8px', lg: '22px' }}
                    minW={{ sm: '220px', md: '140px', lg: '50px' }}
                    bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                    borderRadius='20px'
                    mb='20px'>
                    <Text color='gray.400' fontSize='sm' mb='4px'>
                      Enviados
                    </Text>
                    <Text color='#fff' fontSize='lg' fontWeight='bold'>
                      120 tips
                    </Text>
                  </Flex>
                  <Flex
                    direction='column'
                    p='22px'
                    pe={{ sm: '22px', md: '8px', lg: '22px' }}
                    minW={{ sm: '170px', md: '140px', lg: '170px' }}
                    bg='linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)'
                    borderRadius='20px'>
                    <Text color='gray.400' fontSize='sm' mb='4px'>
                      Acertos
                    </Text>
                    <Text color='#fff' fontSize='lg' fontWeight='bold'>
                      107 greens
                    </Text>
                  </Flex>
                </Flex>
                <Box mx={{ sm: 'auto', md: '0px' }}>
                  <CircularProgress
                    size={window.innerWidth >= 1024 ? 200 : window.innerWidth >= 768 ? 170 : 200}
                    value={70}
                    thickness={6}
                    color='#05CD99'
                    variant='vision'>
                    <CircularProgressLabel>
                      <Flex direction='column' justify='center' align='center'>

                        <Text
                          color='#fff'
                          fontSize={{ md: '36px', lg: '50px' }}
                          fontWeight='bold'
                          mb='4px'>
                          87,3%
                        </Text>
                        <Text color='gray.400' fontSize='sm'>
                          de acertos
                        </Text>
                      </Flex>
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Flex>
            </Flex>
          </Card>

        </Stack>

        <Stack direction={{ sm: "column", md: "row", lg: "row" }}>
          <Card w={{ sm: "350px", md: "540px", lg: "500px" }}>
            <CardHeader px="22px" mb="32px">
              <Text color="#fff" fontSize="lg" fontWeight="bold">
                Oportunidades em destaque
              </Text>
            </CardHeader>
            <CardBody overflowX={{ sm: "scroll", md: "hidden" }}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th
                      color="gray.400"
                      fontSize="10px"
                      fontFamily="Plus Jakarta Display"
                      borderColor="#56577A"
                    >
                      Time:
                    </Th>
                    <Th
                      color="gray.400"
                      fontSize="10px"
                      fontFamily="Plus Jakarta Display"
                      borderColor="#56577A"
                    >
                      Campeonato:
                    </Th>
                    <Th
                      color="gray.400"
                      fontSize="10px"
                      fontFamily="Plus Jakarta Display"
                      borderColor="#56577A"
                    >
                      Odd:
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td minW="180px" borderColor="#56577A">
                      <Stack direction="row" spacing="16px">
                        <Box w="30px" h="30px">
                          <Image src="https://img.icons8.com/color/48/null/corinthians.png" />
                        </Box>
                        <Text color="#fff" fontSize="sm" fontWeight="bold">
                          Corinthians x Palmeiras
                        </Text>
                        <Box w="30px" h="30px">
                        <Image src="https://media.api-sports.io/football/teams/121.png" />
                        </Box>
                      </Stack>
                    </Td>
                    <Td borderColor="#56577A">
                      <Text color="#fff" fontSize="sm" fontWeight="bold">
                      Paulistão                   
                         </Text>
                    </Td>
                    <Td borderColor="#56577A">
                      <Text color="#fff" fontSize="sm" fontWeight="bold">
                        2.45
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td minW="180px" borderColor="#56577A">
                      <Stack direction="row" spacing="16px">
                        <Box w="30px" h="30px">
                          <Image src="https://img.icons8.com/color/48/null/corinthians.png" />
                        </Box>
                        <Text color="#fff" fontSize="sm" fontWeight="bold">
                          Corinthians x Boca Jrs.
                        </Text>
                        <Box w="30px" h="30px">
                          <Image src="https://img.icons8.com/color/48/null/club-atletico-boca-juniors.png" />
                        </Box>
                      </Stack>
                    </Td>
                    <Td borderColor="#56577A">
                      <Text color="#fff" fontSize="sm" fontWeight="bold">
                        Libertadores
                      </Text>
                    </Td>
                    <Td borderColor="#56577A">
                      <Text color="#fff" fontSize="sm" fontWeight="bold">
                        4.66
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td minW="180px" borderColor="#56577A">
                      <Stack direction="row" spacing="16px">
                        <Box w="30px" h="30px">
                        <Image src="https://media.api-sports.io/football/teams/119.png" />
                        </Box>
                        <Text color="#fff" fontSize="sm" fontWeight="bold">
                        Internacional x São José
                        </Text>
                        <Box w="30px" h="30px">
                        <Image src="https://media.api-sports.io/football/teams/15622.png" />
                        </Box>
                      </Stack>
                    </Td>
                    <Td borderColor="#56577A">
                      <Text color="#fff" fontSize="sm" fontWeight="bold">
                        Gauchão
                      </Text>
                    </Td>
                    <Td borderColor="#56577A">
                      <Text color="#fff" fontSize="sm" fontWeight="bold">
                        1.12
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card w={{ sm: "350px", md: "980px", lg: "720px" }}>
            <CardHeader mb="20px" ps="22px">
              <Flex direction="column" alignSelf="flex-start">
                <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                  Greens por mês
                </Text>
              </Flex>
            </CardHeader>
            <Box w="100%" minH={{ sm: "300px" }}>
              <LineChart
                chartData={lineChartDataDashboard}
                chartOptions={lineChartOptionsDashboard}
              />
            </Box>
          </Card>
        </Stack>
      </Stack>
    </Flex>
    </Box>
  );
}
