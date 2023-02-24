
import React, { useReducer } from "react";

import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Grid,
  Icon,
  Menu,
  SimpleGrid,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar11 from "assets/img/avatars/avatar11.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar7 from "assets/img/avatars/avatar7.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { HSeparator } from "components/Separator/Separator";
import IconBox from "components/Icons/IconBox";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// Icons
import {
  AdobeWhiteIcon,
  AtlassianWhiteIcon,
  InvisionWhiteIcon,
  SlackWhiteIcon,
  SpotifyWhiteIcon,
} from "components/Icons/Icons";
import { BsPlus } from "react-icons/bs";
import { FaCube, FaPencilAlt, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp, IoEllipsisVerticalSharp } from "react-icons/io5";

// This reducer changes the active button based on the current state

const reducer = (state, action) => {
  if (action.type === "SWITCH_ACTIVE") {
    if (action.payload === "overview") {
      const newState = {
        overview: true,
        teams: false,
        projects: false,
      };
      return newState;
    } else if (action.payload === "teams") {
      const newState = {
        overview: false,
        teams: true,
        projects: false,
      };
      return newState;
    } else if (action.payload === "projects") {
      const newState = {
        overview: false,
        teams: false,
        projects: true,
      };
      return newState;
    }
  }
  return state;
};

function Projects() {
  const [state, dispatch] = useReducer(reducer, {
    overview: false,
    teams: false,
    projects: true,
  });

  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();

  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();

  const {
    isOpen: isOpen5,
    onOpen: onOpen5,
    onClose: onClose5,
  } = useDisclosure();

  const {
    isOpen: isOpen6,
    onOpen: onOpen6,
    onClose: onClose6,
  } = useDisclosure();

  const {
    isOpen: isOpen7,
    onOpen: onOpen7,
    onClose: onClose7,
  } = useDisclosure();

  const {
    isOpen: isOpen8,
    onOpen: onOpen8,
    onClose: onClose8,
  } = useDisclosure();
  
  let history = useHistory();

  return (
    <Box
    w='100%' alignContent='center'>
    <Flex direction='column'>
      <Stack justifyContent="space-between" direction="row">
        <Box
          boxSize="sm"
          alignItems={{ sm: "center" }}
          w={{ lg: "120px", md: "120px", sm: "180px" }}
          h={{ lg: "80px", md: "80px", sm: "5px" }}
        >
          <IconButton
              onClick={() => {
                history.push('/admin')
                console.log('Passou aqui')
              }}
            style={{
              background:
              "#fb612a",
            }}
            aria-label="Search database"
            icon={<ArrowBackIcon />}
          />
        </Box>

        <Box
          boxSize="sm"
          alignItems={{ sm: "center" }}
          w={{ lg: "120px", md: "120px", sm: "180px" }}
          h={{ lg: "80px", md: "80px", sm: "60px" }}
        >
          <Image src="https://i.imgur.com/9G7DNMx.png" />
        </Box>
        <Box
          boxSize="sm"
          alignItems={{ sm: "center" }}
          w={{ lg: "120px", md: "120px", sm: "180px" }}
          h={{ lg: "80px", md: "80px", sm: "10px" }}
        >
          <Image src="https://i.imgur.com/9G7DNMx.png" h="0px" />
        </Box>
      </Stack>
      <Flex justifyContent="center" pt={{ lg: "45px", md: "45px", sm: "35px" }}>
        <Button
          variant="brand"
          fontSize="10px"
          type="submit"
          w="450px"
          h="60px"
          onClick={() => {
            window.location.href = 'https://luisfporto.github.io/tdbplease/';
            console.log('Passou aqui')
          }}
        >
          <Text fontSize={{ sm: "12px", md: "16px", lg: "16px" }}>
            CLIQUE E CONFIRA TODOS OS JOGOS DO DIA
          </Text>
        </Button>
      </Flex>
      <Flex direction="column" mt={{ sm: "0px", md: "5px", lg: "5px" }}>
        <Flex
          justifyContent="center"
          pb={{ sm: "10px", md: "40px", lg: "40px" }}
        ></Flex>
        <Flex direction="column" mb="44px" mt={{ sm: "16px", lg: "0px" }}>
          <Text fontSize={{lg: "xl", md: "xl", sm: "0px"}} color="#fff" fontWeight="bold" mb="16px">
            Informações de todos os campeonatos do mundo
          </Text>
          <Text fontSize="sm" color="gray.400">
            Clique para conferir os jogos recentes de cada liga em destaque, ou
            caso queira, de qualquer uma do mundo!
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "repeat(2, auto)",
            lg: "repeat(3, auto)",
          }}
          templateRows={{ md: "repeat(3, auto)" }}
          gap="20 px"
        >
          <SimpleGrid
            direction={{ sm: "column", md: "row", lg: "row" }}
            spacing="24px"
          >
            <Stack
              direction={{ sm: "column", md: "row", lg: "row" }}
              justify="space-between"
              
            >
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                      pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Premier League
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbhtmlpremiere/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-U4AvjTZxcyCfRrvMnsyqVLIBMH1wUqRwLGEI6gQW&s" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        La Liga
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/laligatdb/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dxwn_7ON-9PbXcWTHaL135pczPj2nHynA5ddvt89&s" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Ligue 1
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbligueone/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrofAIWxOp7HvmNyR-npo5FWcSbYBIaJ6Yz13B2Tps&s" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
            </Stack>
            <Stack
              direction={{ sm: "column", md: "row", lg: "row" }}
              justify="space-between"
            >
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Bundesliga
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/bundesligatdb/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://cdn.countryflags.com/thumbs/germany/flag-400.png" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Serie A
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbserieA/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIzt_Otc3FCx31Rh7ATlu5oGLcGQOhkFqXYQXtE3Y&s" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Champions League
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbchampions/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
            </Stack>
            <Stack
              direction={{ sm: "column", md: "row", lg: "row" }}
              justify="space-between"
            >
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Campeonato Mineiro
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbMineiro/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                       Campeonato Carioca
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbcarioca/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
              <Card w={{ lg: "350px", md: "350px", sm: "340px"}} h={{ lg: "270px" }}>
                <CardBody>
                  <Flex
                    direction="column"
                    pt="6px"
                    justifyContent="center"
                    pl={{ sm: "25px", lg: "30px" }}
                  >
                    <Flex justifyContent="center" pb="20px">
                      <Text fontSize="md" color="#fff" mt="20px">
                        Campeonato Paulista
                      </Text>
                    </Flex>
                    <Button
                      variant="brand"
                      fontSize="10px"
                      type="submit"
                      w="250px"
                      h="45px"
                      mb="4px"
                      onClick={() => {
                        window.location.href = 'https://luisfporto.github.io/tdbpaulista/';
                        console.log('Passou aqui')
                      }}
                    >
                      CONFIRA OS JOGOS
                    </Button>
                    <HSeparator my="22px" />
                    <Flex justify="space-between" w="100%">
                      <Flex direction="column">
                        <Text fontSize="xs" color="#fff" mt="8px">
                          País:
                        </Text>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          Temporada:
                        </Text>
                      </Flex>
                      <Flex direction="column">
                        <Box w="30px" h="30px">
                          <Image src="https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg" />
                        </Box>
                        <Text fontSize="xs" color="#fff" mb="6px">
                          22/23
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </CardBody>
              </Card>
            </Stack>
            
          </SimpleGrid>
        </Grid>
      </Flex>
</Flex>
</Box>
  );
}

export default Projects;
