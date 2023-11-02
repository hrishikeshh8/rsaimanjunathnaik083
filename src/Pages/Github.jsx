import { Box, Flex, Image, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import background from "../media/background.png";

export const Github = () => {
  return (
    <Box backgroundImage={background}>
      <Text textAlign='center' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} letterSpacing={{ base: '3px' }} color='#f7e93e'>Github Stats</Text>
      <Flex w={{ base: '70%', md: '80%', lg: '80%' }} m='auto' mt={{ base: '15px', md: '25px' }} justifyContent='center' alignItems='center' color='#efee83'>
        <Box>
          <GitHubCalendar blockMargin={5} blockRadius={7} blockSize={14} username="rsaimanjunathnaik083" />
        </Box>
      </Flex>
      <Flex width={{ base: '75%', md: '85%', lg: '70%' }} m='auto' direction={{ base: 'column-reverse', md: 'row' }} justifyContent='center' alignItems='center' mt={{ base: '10px', md: '30px', lg: '50px' }} gap={{ base: '15px', md: '35px', lg: '70px' }}>
        <Box>
          <a href="https://github.com/rsaimanjunathnaik083">
            <Image
              id="github-streak-stats"
              width={{ base: '250px', md: '480px', lg: '500px' }}
              src={`https://github-readme-streak-stats.herokuapp.com/?user=rsaimanjunathnaik083&show_icons=true&count_private=true&border=lightblue`}
            />
          </a>
        </Box>
        <Box>
          <a href="https://github.com/rsaimanjunathnaik083">
            <Image
              id="github-stats-card"
              width={{ base: '300px', md: '490px', lg: '500px' }}
              src={`https://github-readme-stats.vercel.app/api?username=rsaimanjunathnaik083&count_private=true&show_icons=true`}
            />
          </a>
        </Box>
      </Flex>
      <Flex w={{ base: '70%', md: '80%', lg: '30%' }} m='auto' mt={{ base: '15px', md: '25px' }} justifyContent='center' alignItems='center'>
        <Box>
          <a href="https://github.com/rsaimanjunathnaik083">
            <Image
              id="github-top-langs"
              width={{ base: '250px', md: '260px', lg: '350px' }}
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=rsaimanjunathnaik083&show_icons=true&count_private=true`}
            />
          </a>
        </Box>
      </Flex>
    </Box>
  );
};