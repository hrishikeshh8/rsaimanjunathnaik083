import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import background from "../media/background.png";

export const Skills = () => {
  return (
    <Box id="skills" mt="0px" backgroundImage={background} color="white" pt="15px" pb="30px">
      <Heading pt='55px' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center' color="#f7e93e" >My Skills</Heading>
      <Box mt="30px">
        <Heading textDecoration="underline" fontSize={{ base: '8px', md: '15px', lg: '25px' }} fontWeight={{ base: '350', md: '450' }} textAlign='center' >Tech Stacks</Heading>

        <Grid
          templateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}
          w="80%"
          m="auto"
          mt="30px"
          gap={"20px"}
        >
          <GridItem m="auto" h="120px" p="10px" className="skills-card"  >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn-icons-png.flaticon.com/512/143/143655.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              HTML
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              CSS
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/color/2x/javascript.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              JavaScript
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://puja2795.github.io/static/media/ts.7b64d9ca208b9c3f7055.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              TypeScript
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              ReactJs
            </Text>
          </GridItem>
          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/color/2x/redux.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Redux
            </Text>
          </GridItem>


          {/* second row  */}
          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/color/2x/chakra-ui.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Chakra UI
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://img.icons8.com/fluency/2x/node-js.png "
            />
            <Text fontSize={"15px"} className="skills-card-name">
              NodeJS
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/express-js-5379348-4492470.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Express Js
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              MongoDB
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="data:image/png;base64,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ASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAOxbAPzqK+2HZPrPPgJK7HL/fv43ASAABIAAEAACQADsk+24+E0FwG/9yyMP7+YIyO+JIot/+5sn1nfz+zoe9+7+PXdAAAgAASAABIAAEACzPEeOH4/v4eBg/3o9kSMg3wnI74dC+2zs12PPxt7jDoAAEAACQAAIAAGwj16q9+eDKt5vhd8DAkAACAABIAAEgAB4hwurqyt/11988p2AfP7PcMUjQAAIAAEgAASAABAAN/FHTz/dRsDo1wH5bwLy+V9q22/7z9lWPKYAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAgABIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAgABIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAuD/C4B8YUgv9AFwZ3yQHFqOVXf2L/wzbQCkCIC6YACkPgBSerz/kD5c8Pkd7h/jxCgAGgGwZ2fW11dOVYNRVB3IAbw853+79/TP7VNtAKQIgDSTAPhA/967Y1m+l00aHNp44Ofz9/JrbQCkggGQ+gBI6cWz8dinIvjLPa/2Wnm4D4DfKx4AqQ+A1AbAXRur1UrB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"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              NPM
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Bootstrap
            </Text>
          </GridItem>

        </Grid>
      </Box>

      {/* third row  */}

      <Box mt="30px">
        <Heading textDecoration={"underline"} fontSize={{ base: '8px', md: '15px', lg: '25px' }} fontWeight={{ base: '350', md: '450' }} textAlign='center'>Other Skills</Heading>
        <Grid
          templateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}
          w="80%"
          m="auto"
          mt="30px"
          gap={"20px"}
        >
          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/data-structures-and-algorithms-5530325-4619143.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              DSA
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/adaptable-3383780-2812133.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Adaptable
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/communication-742-875307.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Communication
            </Text>
          </GridItem>

          <GridItem m="auto" h="100px" className="skills-card">
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/teamwork-2075509-1751782.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Teamwork
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://cdn.iconscout.com/icon/free/png-256/github-159-721954.png?f=avif&w=256"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Github
            </Text>
          </GridItem>

          <GridItem m="auto" h="120px" p="10px" className="skills-card" >
            <Image
              h="70px"
              m="auto"
              className="skills-card-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwWwemE8S4-zkkcrBFWdvNDyuacMx_h4tWw&usqp=CAU"
            />
            <Text fontSize={"15px"} className="skills-card-name">
              Netlify
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
