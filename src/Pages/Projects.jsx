import React from "react";
import { Box, Image, Badge, Text, Flex, Button } from "@chakra-ui/react";
import indishop from "../media/Projectimages/indishop-img.png";
import fitme from "../media/Projectimages/fitme.png";
import fashionbeyond from "../media/Projectimages/fashion-beyond.png";
import deccan from "../media/Projectimages/deccan.png";
import Zoom from "react-reveal/Zoom";

export const Projects = () => {
  return (
    <Box
      id="projects"
      backgroundColor="#181a1b"
      color="white"
      pt="55px"
      border="5px solid #181a1b"
    >
      <Text
        textAlign="center"
        color="#f7e93e"
        fontSize={{ base: "20px", md: "22px", lg: "40px" }}
        fontWeight={{ base: "600", md: "700" }}
      >
        My Projects
      </Text>
      <Box
        w={"80%"}
        display={{ base: "column", sm: "column", lg: "grid" }}
        gridTemplateColumns="repeat(2,1fr)"
        m={"auto"}
        mt="20px"
        gap={20}
      >
        {/* {first} */}
        <Text left>
          <Zoom>
            <Box
              className="project-card"
              w={"100%"}
              borderRadius="lg"
              overflow="hidden"
              backgroundColor={"black"}
              mb={10}
            >
              <Image
                w="full"
                src={indishop}
                alt="indishop.com"
                h={{ lg: "300px" }}
              />

              <Box p="6" backgroundColor="black" textAlign="start">
                <Text
                  className="project-title"
                  fontWeight="bold"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                >
                  Indishop.com
                </Text>
                <Box
                  className="project-description"
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  h={{ lg: "80px" }}
                  mb={{ lg: 6 }}
                >
                  Indi Shop is an e-commerce platform that is a clone of the
                  popular Indian e-commerce website meesho.com. This platform
                  has been built using React and Redux, and is designed to
                  provide an easy-to-use, mobile-friendly shopping experience
                  for users. Collaborative project
                </Box>
                <Box
                  class="project-tech-stack"
                  display={{ base: "column", sm: "column", lg: "flex" }}
                  alignItems="baseline"
                  mt={3}
                >
                  <Badge
                    borderRadius="full"
                    px="2"
                    fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                    bgColor="#efee83"
                  >
                    TECH STACK
                  </Badge>
                  <Box
                    display={{ base: "grid", sm: "grid", lg: "flex" }}
                    gridTemplateColumns="repeat(1,1fr)"
                    gap={1}
                  >
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      ReactJS
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      Redux
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      TypeScript
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      ChakraUI
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Flex gap={10} alignItems="center" mb={5} ml={7}>
                <a
                  className="project-deployed-link"
                  href="https://indi-shop.vercel.app/"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"red"}
                    _hover={{ bgColor: "green" }}
                    mr="25px"
                  >
                    Live
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/GovindPullagura/aware-carriage-7836.git"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"green"}
                    _hover={{ bgColor: "red" }}
                  >
                    Code
                  </Button>
                </a>
              </Flex>
            </Box>
          </Zoom>
        </Text>

        {/* {second} */}
        <Text right>
          <Zoom>
            <Box
              className="project-card"
              w={"100%"}
              borderRadius="lg"
              overflow="hidden"
              backgroundColor={"black"}
              mb={10}
            >
              <Image w="full" src={fitme} alt="fitme.com" h={{ lg: "300px" }} />

              <Box p="6" backgroundColor="black" textAlign="start">
                <Text
                  className="project-title"
                  fontWeight="bold"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                >
                  fitme.com
                </Text>
                <Box
                  className="project-description"
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  h={{ lg: "80px" }}
                  mb={{ lg: 6 }}
                >
                  It's a clone of Cult.fit website, A fitness group helping
                  people live longer, happier and healthier lives through yoga
                  and meditation. A collaborative project built by a team of 5
                  members delivered in 6 days.
                </Box>
                <Box
                  class="project-tech-stack"
                  display={{ base: "column", sm: "column", lg: "flex" }}
                  alignItems="baseline"
                  mt={3}
                >
                  <Badge
                    borderRadius="full"
                    px="2"
                    fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                    bgColor="#efee83"
                  >
                    TECH STACK
                  </Badge>
                  <Box
                    display={{ base: "grid", sm: "grid", lg: "flex" }}
                    gridTemplateColumns="repeat(1,1fr)"
                    gap={1}
                  >
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      JavaScript
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      CSS
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      HTML
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      AdvanceJS
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Flex gap={10} alignItems="center" mb={5} ml={7}>
                <a
                  className="project-deployed-link"
                  href="https://starlit-lamington-551963.netlify.app/"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"red"}
                    _hover={{ bgColor: "green" }}
                    mr="25px"
                  >
                    Live
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/puja2795/shut-point-1924"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"green"}
                    _hover={{ bgColor: "red" }}
                  >
                    Code
                  </Button>
                </a>
              </Flex>
            </Box>
          </Zoom>
        </Text>
      </Box>

      <Box
        w={"80%"}
        display={{ base: "column", sm: "column", lg: "grid" }}
        gridTemplateColumns="repeat(2,1fr)"
        m={"auto"}
        mt="20px"
        gap={20}
      >
        {/* {Third} */}
        <Text left>
          <Zoom>
            <Box
              className="project-card"
              w={"100%"}
              borderRadius="lg"
              overflow="hidden"
              backgroundColor={"black"}
              mb={10}
            >
              <Image
                w="full"
                src={fashionbeyond}
                alt="indishop.com"
                h={{ lg: "300px" }}
              />

              <Box p="6" backgroundColor="black" textAlign="start">
                <Text
                  className="project-title"
                  fontWeight="bold"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                >
                  fashionBeyondAll.com
                </Text>
                <Box
                  className="project-description"
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  h={{ lg: "80px" }}
                  mb={{ lg: 6 }}
                >
                  Fashion Beyond All is an e-commerce platform that is a clone
                  of the popular Indian e-commerce website mirraw.com. This
                  platform has been built using ReactJs and ChakraUI is designed
                  to provide an easy-to-use, mobile-friendly shopping experience
                  for users.
                </Box>
                <Box
                  class="project-tech-stack"
                  display={{ base: "column", sm: "column", lg: "flex" }}
                  alignItems="baseline"
                  mt={3}
                >
                  <Badge
                    borderRadius="full"
                    px="2"
                    fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                    bgColor="#efee83"
                  >
                    TECH STACK
                  </Badge>
                  <Box
                    display={{ base: "grid", sm: "grid", lg: "flex" }}
                    gridTemplateColumns="repeat(1,1fr)"
                    gap={1}
                  >
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      JavaScript
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      ReactJS
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      ChakraUI
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Flex gap={10} alignItems="center" mb={5} ml={7}>
                <a
                  className="project-deployed-link"
                  href="#"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"red"}
                    _hover={{ bgColor: "green" }}
                    mr="25px"
                  >
                    Live
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/rsaimanjunathnaik083/gullible-interest-3767.git"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"green"}
                    _hover={{ bgColor: "red" }}
                  >
                    Code
                  </Button>
                </a>
              </Flex>
            </Box>
          </Zoom>
        </Text>

        {/* {Fourth} */}
        <Text right>
          <Zoom>
            <Box
              className="project-card"
              w={"100%"}
              borderRadius="lg"
              overflow="hidden"
              backgroundColor={"black"}
              mb={10}
            >
              <Image
                w="full"
                src={deccan}
                alt="deccan.com"
                h={{ lg: "300px" }}
              />

              <Box p="6" backgroundColor="black" textAlign="start">
                <Text
                  className="project-title"
                  fontWeight="bold"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                >
                  DeccanChronicle.com
                </Text>
                <Box
                  className="project-description"
                  fontSize={{ base: "sm", md: "md", lg: "md" }}
                  h={{ lg: "80px" }}
                  mb={{ lg: 6 }}
                >
                  It's a clone of Deccan Chronicle, that provides you a daily
                  news reports regarding all over the Country.
                </Box>
                <Box
                  class="project-tech-stack"
                  display={{ base: "column", sm: "column", lg: "flex" }}
                  alignItems="baseline"
                  mt={3}
                >
                  <Badge
                    borderRadius="full"
                    px="2"
                    fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                    bgColor="#efee83"
                  >
                    TECH STACK
                  </Badge>
                  <Box
                    display={{ base: "grid", sm: "grid", lg: "flex" }}
                    gridTemplateColumns="repeat(1,1fr)"
                    gap={1}
                  >
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      Html
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      CSS
                    </Box>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize={{ base: "xs", md: "sm", lg: "sm" }}
                      textTransform="uppercase"
                      ml="2"
                    >
                      JavaScript
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Flex gap={10} alignItems="center" mb={5} ml={7}>
                <a
                  className="project-deployed-link"
                  href="https://luminous-youtiao-780306.netlify.app/"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"red"}
                    _hover={{ bgColor: "green" }}
                    mr="25px"
                  >
                    Live
                  </Button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/rsaimanjunathnaik083/offbeat-edge-8089.git"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <Button
                    color="white"
                    bgColor={"green"}
                    _hover={{ bgColor: "red" }}
                  >
                    Code
                  </Button>
                </a>
              </Flex>
            </Box>
          </Zoom>
        </Text>
      </Box>
    </Box>
  );
};
