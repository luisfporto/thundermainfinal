

import React from "react";
import { useHistory } from "react-router-dom";

import {
  Avatar,
  AvatarGroup,
  Box,
  Image,
  Flex,
  Grid,
  Icon,
  Badge,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

// Images
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import EventCalendar from "components/Calendars/EventCalendar";
import { VSeparator } from "components/Separator/Separator";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
import { ArrowBackIcon } from "@chakra-ui/icons";

// Icons
import { ClockIcon, DocumentIcon, WalletIcon } from "components/Icons/Icons";
import { FaShip } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import { calendarDataCalendar } from "variables/calendar";

// Data
import {
  lineChartDataCalendar,
  lineChartOptionsCalendar,
} from "variables/charts";

function Calendar() {
  const textColor = "white";
  const iconWhite = "white";
  const textGray = "gray.400";
  const iconBg = "brand.200";
  let history = useHistory();

  return (
    <>
    <Stack
    direction='row'
    justifyContent='space-between'
    >

    <Box boxSize='sm'
      alignItems={{ sm: "center" }} w={{ lg: "120px", md: "120px", sm: "180px" }}

      h={{ lg: "80px", md: "80px", sm: "80px" }}>
      <IconButton
       onClick={() => {
        history.push('/admin')
        console.log('Passou aqui')
      }}
        style={{
              background:
              "#fb612a",
            }}
        aria-label='Search database'
        icon={<ArrowBackIcon />} />
    </Box>
    <Box boxSize='sm'
         
            alignItems={{ sm: "center" }} w={{ lg: "120px", md: "120px", sm: "180px" }}
            pb={{ sm: "20px", md: "60x", lg: "60px" }}
            h={{ lg: "80px", md: "80px", sm: "20px" }}>
            <Image src='https://i.imgur.com/9G7DNMx.png' 
            h={{ lg: "80px", md: "80px", sm: "100px" }}

            />
          </Box>
          <Box boxSize='sm'
         
         alignItems={{ sm: "center" }} w={{ lg: "120px", md: "120px", sm: "180px" }}
         pb={{ sm: "10px", md: "60x", lg: "60px" }}
         h={{ lg: "80px", md: "80px", sm: "80px" }}>
         
       </Box>
    </Stack>
    <Flex justifyContent='center' pt={{ sm: "20px", lg: "0px" }}>

        <Flex direction='column' alignItems='center'>
      

          <Text color="#fff" fontSize="2xl" fontWeight="bold" py='12px'>
            Melhores odds
          </Text>

          <Grid templateColumns={{ sm: "1fr", lg: "2fr 1fr" }} gap="24px">

            <SimpleGrid spacing='40px'
              direction={{ sm: 'column', md: "row", lg: "row" }}
              pl={{md: '25px', lg: '25px'}}>
              <Stack
                direction={{ sm: "column", md: "row", lg: "row" }}
                justify="space-between"
              >
                <Card width={{ sm: "380px", md: "380px" }} height="120px" pt="15px">
                  <CardBody>
                    <Stack direction="column" spacing="20px">
                      <Flex align="center">
                        <IconBox
                          as="box"
                          h={"50px"}
                          w={"50px"}
                          bg={iconBg}
                          me="16px"
                        >
                          <Text color={textColor} fontSize="sm" fontWeight="bold">
                            2.45
                          </Text>
                        </IconBox>
                        <Flex direction="column">
                          <Stack direction="column" align="center">
                            <Stack direction="row" spacing="16px">
                              <Box w="30px" h="30px">
                                <Image src="https://img.icons8.com/color/48/null/corinthians.png" />
                              </Box>
                              <Text color="#fff" fontSize="sm" fontWeight="bold">
                              Corinthians x Palmeiras
                              </Text>
                              <Box w="30px" h="30px">
                              </Box>
                            </Stack>
                            <Badge
                              color="#01B574"
                              bg="#C9FBD5"
                              w="95px"
                              h="28px"
                              borderRadius="8px"
                              display="flex"
                              alignItems="center"
                              alignSelf={{ sm: "center", md: "auto" }}
                              justifyContent="center"
                              mb={{ sm: "6px", md: "0px" }}
                            >
                              OVER 1.5 HT
                            </Badge>

                            <Text color="gray.400" fontSize="sm" fontWeight="500">
                             Paulistão, 66% probabilidade
                            </Text>
                          </Stack>
                        </Flex>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
                <Card width={{ sm: "380px", md: "380px" }} height="120px" pt="15px">
                  <CardBody>
                    <Stack direction="column" justifyContent='space-around' spacing="20px">
                      <Flex align="center">
                        <IconBox
                          as="box"
                          h={"50px"}
                          w={"50px"}
                          bg={iconBg}
                          me="16px"
                        >
                          <Text color={textColor} fontSize="sm" fontWeight="bold">
                            4.66
                          </Text>
                        </IconBox>
                        <Flex direction="column">
                          <Stack direction="column" align="center">
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
                            <Badge
                              color="#01B574"
                              bg="#C9FBD5"
                              w="95px"
                              h="28px"
                              borderRadius="8px"
                              display="flex"
                              alignItems="center"
                              alignSelf={{ sm: "center", md: "auto" }}
                              justifyContent="center"
                              mb={{ sm: "6px", md: "0px" }}
                            >
                              OVER 1.5 FT
                            </Badge>

                            <Text color="gray.400" fontSize="sm" fontWeight="500">
                              Libertadores, 87% probabilidade
                            </Text>
                          </Stack>
                        </Flex>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
   
                <Card width={{ sm: "380px", md: "380px" }} height="120px" pt="15px">
                  <CardBody>
                    <Stack direction="column" spacing="20px">
                      <Flex align="center">
                        <IconBox
                          as="box"
                          h={"50px"}
                          w={"50px"}
                          bg={iconBg}
                          me="16px"
                        >
                          <Text color={textColor} fontSize="sm" fontWeight="bold">
                            1.12
                          </Text>
                        </IconBox>
                        <Flex direction="column">
                          <Stack direction="column" align="center">
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
                            <Badge
                              color="#01B574"
                              bg="#C9FBD5"
                              w="95px"
                              h="28px"
                              borderRadius="8px"
                              display="flex"
                              alignItems="center"
                              alignSelf={{ sm: "center", md: "auto" }}
                              justifyContent="center"
                              mb={{ sm: "6px", md: "0px" }}
                            >
                              OVER 2.5 FT
                            </Badge>

                            <Text color="gray.400" fontSize="sm" fontWeight="500">
                              Gauchão, 72,5% probabilidade
                            </Text>
                          </Stack>
                        </Flex>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>

            </SimpleGrid>


          </Grid>

          <Text color="#fff" fontSize="2xl" fontWeight="bold" py='12px'>
            Tips
          </Text>

          <Grid templateColumns={{ sm: "1fr", lg: "2fr 1fr" }} gap="24px">

            <SimpleGrid spacing={{ sm: "10px", md: '20px', lg: '20px' }}
              direction={{ sm: 'column', md: "row", lg: "row" }}
              pl={{md: '25px', lg: '25px'}}>

              <Stack
                direction={{ sm: "column", md: "row", lg: "row" }}
                justify="space-between"
              >
              <Card width={{ sm: "380px", md: "380px" }} height="120px" pt="15px">
                  <CardBody>
                    <Stack direction="column" spacing="20px">
                      <Flex align="center">
                        <IconBox
                          as="box"
                          h={"50px"}
                          w={"50px"}
                          bg={iconBg}
                          me="16px"
                        >
                          <Text color={textColor} fontSize="sm" fontWeight="bold">
                            2.65
                          </Text>
                        </IconBox>
                        <Flex direction="column">
                          <Stack direction="column" align="center">
                            <Stack direction="row" spacing="16px">
                              <Box w="30px" h="30px">
                              <Image src="https://media.api-sports.io/football/teams/550.png" />
                              </Box>
                              <Text color="#fff" fontSize="sm" fontWeight="bold">
                                Shaktar Donetsk x Rennes
                              </Text>
                              <Box w="30px" h="30px">
                              <Image src="https://media.api-sports.io/football/teams/94.png" />
                              </Box>
                            </Stack>
                            <Badge
                              color="#01B574"
                              bg="#C9FBD5"
                              w="95px"
                              h="28px"
                              borderRadius="8px"
                              display="flex"
                              alignItems="center"
                              alignSelf={{ sm: "center", md: "auto" }}
                              justifyContent="center"
                              mb={{ sm: "6px", md: "0px" }}
                            >
                              OVER 2.5 FT
                            </Badge>

                            <Text color="gray.400" fontSize="sm" fontWeight="500">
                            Europa League, 56% probabilidade
                            </Text>
                          </Stack>
                        </Flex>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card> 
                <Card width={{ sm: "380px", md: "380px" }} height="120px" pt="15px">
                  <CardBody>
                    <Stack direction="column" spacing="20px">
                      <Flex align="center">
                        <IconBox
                          as="box"
                          h={"50px"}
                          w={"50px"}
                          bg={iconBg}
                          me="16px"
                        >
                          <Text color={textColor} fontSize="sm" fontWeight="bold">
                            3.12
                          </Text>
                        </IconBox>
                        <Flex direction="column">
                          <Stack direction="column" align="center">
                            <Stack direction="row" spacing="16px">
                              <Box w="30px" h="30px">
                              <Image src="https://media.api-sports.io/football/teams/571.png" />
                              </Box>
                              <Text color="#fff" fontSize="sm" fontWeight="bold">
                                RB Salzburg x Roma
                              </Text>
                              <Box w="30px" h="30px">
                              <Image src="https://media.api-sports.io/football/teams/497.png" />
                              </Box>
                            </Stack>
                            <Badge
                              color="#01B574"
                              bg="#C9FBD5"
                              w="95px"
                              h="28px"
                              borderRadius="8px"
                              display="flex"
                              alignItems="center"
                              alignSelf={{ sm: "center", md: "auto" }}
                              justifyContent="center"
                              mb={{ sm: "6px", md: "0px" }}
                            >
                              OVER 3.5 FT
                            </Badge>

                            <Text color="gray.400" fontSize="sm" fontWeight="500">
                              Europa League, 83,5,5% probabilidade
                            </Text>
                          </Stack>
                        </Flex>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
                <Card width={{ sm: "380px", md: "380px" }} height="120px" pt="15px">
                  <CardBody>
                    <Stack direction="column" spacing="20px">
                      <Flex align="center">
                        <IconBox
                          as="box"
                          h={"50px"}
                          w={"50px"}
                          bg={iconBg}
                          me="16px"
                        >
                          <Text color={textColor} fontSize="sm" fontWeight="bold">
                            1.85
                          </Text>
                        </IconBox>
                        <Flex direction="column">
                          <Stack direction="column" align="center">
                            <Stack direction="row" spacing="16px">
                              <Box w="30px" h="30px">
                              <Image src="https://media.api-sports.io/football/teams/33.png" />
                              </Box>
                              <Text color="#fff" fontSize="sm" fontWeight="bold">
                                Barcelona x Man. Utd.
                              </Text>
                              <Box w="30px" h="30px">
                              <Image src="https://media.api-sports.io/football/teams/529.png" />
                              </Box>
                            </Stack>
                            <Badge
                              color="#01B574"
                              bg="#C9FBD5"
                              w="95px"
                              h="28px"
                              borderRadius="8px"
                              display="flex"
                              alignItems="center"
                              alignSelf={{ sm: "center", md: "auto" }}
                              justifyContent="center"
                              mb={{ sm: "6px", md: "0px" }}
                            >
                              OVER 3.5 HT
                            </Badge>

                            <Text color="gray.400" fontSize="sm" fontWeight="500">
                              Europa League, 56% probabilidade
                            </Text>
                          </Stack>
                        </Flex>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
              </Stack>
            </SimpleGrid>


          </Grid>
        </Flex>
      </Flex></>
  );
}

export default Calendar;
