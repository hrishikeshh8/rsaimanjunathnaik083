import { Box, Flex, Text } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'

export const Contact = () => {
  return (
    <>
    <Box style={{ backgroundColor: '#181a1b' }} color='white'>
      <Text id="contact" textAlign='center' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} color='#f7e93e'>Contact</Text>
      <Box p={{ base: '10px', md: '20px' }} backgroundColor="" mt='10px' color='white' >
        <Text textAlign='center' fontSize={{ base: '13px', md: '16px' }}>connect with me on</Text>
        <Flex w={{ base: '100%', md: '70%', lg: '50%' }} m='auto' justifyContent='space-between' fontSize={{ base: '22px', md: '26px', lg: '30px' }} mt='25px'>
          <Flex flexDirection="column" alignItems="center" gap={3} >
            <a href="https://www.linkedin.com/in/rsaimanjunathnaik/" target='_blank' > <Text w="35px" h="35px" pl='2.5px' pt='2.5px' borderRadius='10%' color="#efee83" bgColor="black" _hover={{ bgColor: "green" }}><BsLinkedin/></Text></a>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }} color="#efee83">rsaimanjunathnaik</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <a href="https://github.com/rsaimanjunathnaik083"  target='_blank'><Text w="35px" h="35px" pl='2.5px' pt='2.5px' borderRadius='10%' color="black" bgColor="#efee83" _hover={{ bgColor: "green" }}><BsGithub /></Text></a>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }}  color="#efee83">rsaimanjunathnaik083</Text>
          </Flex>

          <Flex flexDirection="column" alignItems="center" gap={3}>
            <a href="tel:+918179066510"  target='_blank'><Text w="35px" h="35px" pl='2.5px' pt='2.5px' borderRadius='10%'  color="black" bgColor="#efee83" _hover={{ bgColor: "green" }}><AiOutlinePhone /></Text></a>
            <Text id="contact-phone" fontSize={{ base: '7px', md: '11px', lg: '15px' }} color="#efee83">+91 8179066510</Text>
          </Flex>

          <Flex id="contact-email" flexDirection="column" alignItems="center" gap={3}>
            <a href="mailto:rsaimanjunath9014@gmail.com"  target='_blank'><Text w="35px" h="35px" pl='2.5px' pt='2.5px' borderRadius='10%' color="black" bgColor="#efee83" _hover={{ bgColor: "green" }}><GrMail /></Text></a>
            <Text fontSize={{ base: '7px', md: '11px', lg: '15px' }} color="#efee83">rsaimanjunath9014@gmail.com</Text>
          </Flex>
        </Flex>
      </Box>
      <Text textAlign='center' fontFamily='sans-serif' pt='25px'> Made with ❤️ by Manjunath</Text>
      </Box>
    </>
  )

}
