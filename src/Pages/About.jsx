import {
  Box,
  Text,
  Flex,
  Button,
  Image,
} from '@chakra-ui/react';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { Link } from "react-router-dom"
import { FaDownload } from 'react-icons/fa';
import React from 'react';

export const About = () => {
  const handleOpen = () => {
    window.open(
      "https://drive.google.com/file/d/1C7oqGjpEtU_b1b_aWgVfq9PPpKi9vkaf/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <Box id="about" className="about section" style={{ backgroundColor: '#181a1b' }} >
      <Text id="about" color='#f7e93e' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center' margin={5} marginTop={-50} pt={"55px"}>About Me</Text>
      <Box w={"80%"} display={{ base: "column", sm: "column", lg: "grid" }} gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="30px" gap={20}>
        <Text left>
          <Box w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10}  >
            <Image w='full' src={"https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg"} alt="indishop.com" h={{ lg: '350px' }} />
          </Box>
        </Text>
        <Text right id="user-detail-intro">
          <Box
            maxW={{ base: '350px', md: '450px', lg: '600px', xl: '800px' }}
            w={'full'}
            color='white'
            rounded={'lg'}
            textAlign={'center'}>
            <Text id="user-detail-name" textAlign={'justify'} px={5} fontSize="25" fontFamily='sans-serif' fontWeight='600'>
              I'm Hrishikesh Naik
            </Text>
            <Text textAlign={'justify'} px={5} fontSize="16" >
              A motivated, detail-oriented and aspiring Full Stack Web Developer with a specialisation in HTML, CSS, Javascript, AdvanceJS, ReactJS, TypeScript. A quick learner who is confident and always curious to learn new technologies. Looking for a Job opportunity in a technology driven organisation that enhance my career and technical knowledge.
            </Text>
            <hr style={{ marginLeft: '17px' }} />
            <Text textAlign={'justify'} px={5} fontSize="16"  >
              <ul class="about-info mt-4 px-md-0 px-2" display='inline-block' padding='0' margin='0' width='100%'>
                <p class="d-flex"><span>Name :</span><span> Hrishikesh Naik</span></p>
                <p class="d-flex"><span>Date of birth :</span> <span> May 08, 1998</span></p>
                <p class="d-flex"><span>Address :</span> <span> Puttaparthi, Anantapur, Andhra Pradesh</span></p>
                <p class="d-flex"><span>Pin code :</span> <span> 515231</span></p>
                <p class="d-flex"><span>Email :</span> <span> hrishikeshmood@gmail.com</span></p>
                <p class="d-flex"><span>Phone :</span> <span> +91-9703824919</span></p>
              </ul>
            </Text>
            <hr style={{ marginLeft: '17px' }} />
            <Flex ml='18px'>
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/hrishikesh-naik-457a74b6?"
                target="_blank"
                rel="noreferrer" >
                <Button w="40px" h="40px" p="0" color="black" bgColor="#efee83" _hover={{ bgColor: "green" }} mt="15px">
                  <AiOutlineLinkedin size="38px" />
                </Button>
              </a>
              <a
                id="contact-github"
                href="https://github.com/hrishikeshh8"
                target="_blank"
                rel="noreferrer">
                <Button w="40px" h="40px" p="0" ml="30px" color="black" bgColor="#efee83" _hover={{ bgColor: "green" }} mt="15px">
                  <AiOutlineGithub size="40px" />
                </Button>
              </a>
              <Text cursor='pointer'>
                <Link className="nav-link resume" id="resume-button-2" to="https://drive.google.com/uc?export=download&id=1C7oqGjpEtU_b1b_aWgVfq9PPpKi9vkaf">
                  <Button  id="resume-button-2" onClick={handleOpen} size={{ base: 'sm', md: 'md', lg: '100px' }} mt={{ base: '8px', md: '14px' }} ml="20px" h="40px" color="black" bgColor="#efee83" _hover={{ bgColor: "green" }} gap={1.0} p='10px'>
                    RESUME
                    <FaDownload className="icon1" />
                  </Button>
                </Link>
              </Text>
            </Flex>
          </Box>
        </Text>
      </Box>
    </Box>
  );
}