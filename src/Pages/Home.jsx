import hrishi from "../media/hrishi.jpg"
import background  from "../media/background.png";
import higif from "../media/Hi-giffy.gif"
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Box backgroundImage={background}>
        <Box id="home" height={{ base: '40px', md: '60px' }}></Box>
        <Box
          mt={100}
          w='100%'
          h={{
            base: '320px',
            lg: "600px",
            md: '400px',
            sm: '320px'
          }}
          bgPosition="cover"
          bgRepeat="no-repeat">

          <Flex w={{ base: '100%', md: '80%' }} m='auto' alignItems='center' justifyContent={{ base: 'center', md: 'space-around' }} flexDirection={{ base: 'column-reverse', lg: 'row' }} rowGap={{ base: '10px', md: '10px' }} mt={{ base: '20px', md: '10px', lg: '40px' }}>
            <Box fontSize={{ base: '18px', md: '35px', lg: '55px' }} width={{ base: '90%', md: '100%', lg: '65%' }} m={{ base: 'auto', lg: '0' }} fontWeight='600' textAlign={{ base: 'center', lg: 'left' }} lineHeight={{ base: '28px', md: '50px', lg: '80px' }}>
              <Flex justifyContent='center' gap='5px' direction={{ base: 'row', lg: 'column' }}>
                <Flex  color='white'>
                  <Text display='flex' gap='15px'>Hello!<Image src={higif} shadow='lg' mt={{ base: '5px', md: '15px' }} w={{ base: '20px', md: '30px', lg: '50px' }} h={{base: '20px', md: '30px', lg: '50px'}} alt="hello" />There</Text>
                </Flex>
                <Text fontSize={{ xs: "15px", base: '20px', md: '40px', lg: '60px' }} color='#f7e93e'>This is Hrishikesh Naik</Text>
              </Flex>
              <Text fontSize={{ base: '15px', md: '30px', lg: '40px' }} color='white'>I'm a Full-Stack Web Developer. . .</Text>
            </Box>
            <Box>
              <Image className="home-img" src={hrishi} shadow='lg' mt={{ base: '10px', md: '0px' }} w={{ base: '100px', md: '200px', lg: '370px' }} borderRadius='50%' _hover={{ boxshodow: "lg" }} alt="manju" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}