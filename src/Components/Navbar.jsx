import signature from "../media/signature.png"
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom"
import { FaDownload } from 'react-icons/fa';


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    window.open(
      "https://drive.google.com/file/d/1C7oqGjpEtU_b1b_aWgVfq9PPpKi9vkaf/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <>
      <Box id="nav-menu" pos='fixed' w='100%' zIndex='99' px={4} className='ChackraNavBar nav-menu' shadow='lg' backgroundColor='#f57607'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size='lg' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          <Flex justifyContent={'space-between'} alignItems='center' w='90%' m={'auto'} >

            <Box p='5px'>
              <Image width={{ base: '92px', md: '170px' }} height={{ base: '25px', md: '45px' }} src={signature} marginTop={-0} ml={{ md: "5px", lg: "45px" }} />
            </Box>

            <Flex as={'nav'} spacing={5} display={{ base: 'none', md: 'flex' }} gap='20px' w={{ base: '80%', md: '60%', lg: '40%' }} mr={{ md: "20px", lg: "40px" }} justifyContent='space-between' alignItems='center' fontWeight='700' fontSize={{ base: "80px", md: "14px", lg: "20px" }}>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#home" className="nav-link home">HOME</a>
              </Text>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#about" className="nav-link about">ABOUT</a>
              </Text>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#projects" className="nav-link projects" >PROJECT</a>
              </Text>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#skills" className="nav-link skills">SKILL</a>
              </Text>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#contact" className="nav-link contact">CONTACT</a>
              </Text>
              <Text cursor='pointer'>
                <Link className="nav-link resume" to="https://drive.google.com/uc?export=download&id=1C7oqGjpEtU_b1b_aWgVfq9PPpKi9vkaf">
                  <Button id="resume-button-1" onClick={handleOpen} size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} color='black' bg='#f7e93e' _hover={{ bgColor: "#efee83", }} gap={1.0}>
                    RESUME
                    <FaDownload className="icon1" />
                  </Button>
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4} color='#3197' fontWeight='600'>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#home">HOME</a>
              </Text>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#about">ABOUT</a>
              </Text >
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#projects">PROJECT</a>
              </Text>className="nav-link projects
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#skills">SKILL</a>
              </Text>
              <Text cursor='pointer' _hover={{ textDecoration: "underline" }}>
                <a href="#contact">CONTACT</a>
              </Text>
              <Text>
                <Link to="https://drive.google.com/uc?export=download&id=1C7oqGjpEtU_b1b_aWgVfq9PPpKi9vkaf">
                  <Button onClick={handleOpen} size={{ base: 'sm', md: 'md', lg: 'lg' }} mt={{ base: '10px', md: '0' }} color='black' bg='#f7e93e' _hover={{ bgColor: "#efee83", }} gap={1.0}>
                    RESUME
                    <FaDownload className="icon1" />
                  </Button>
                </Link>
              </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}


