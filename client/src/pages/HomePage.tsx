import { PreLoader } from "../components/Preloader";
import {
  Img1,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img2,
  Img3,
  Img4,
  Img8,
  Img9,
} from "../assets/png/HomePage";
import Logo from "../assets/png/Icons/logomain.svg";
import { useNavigate } from "react-router-dom";
import { slideDown, slideUp } from "../chakraUi/animation/";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Photist";
  }, []);

  const slide1 = [Img1, Img2, Img14];
  const slide2 = [Img4, Img12, Img15];
  const slide3 = [Img3, Img8, Img9];
  const slide4 = [Img10, Img11, Img12];
  const slide5 = [Img13, Img14, Img15];

  return (
    <Box>
      <PreLoader />
      <Box w="100%" h="100vh" bgColor="black" display="flex" overflow="hidden">
        <Box
          animation={slideUp}
          display="flex"
          h="100vh"
          transitionDelay="0s"
          flex="1"
          flexDirection="column"
        >
          {slide1.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </Box>
        <Box
          animation={slideDown}
          display="flex"
          h="100vh"
          transitionDelay="0.25s"
          flex="1"
          flexDirection="column"
        >
          {slide2.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </Box>
        <Box
          animation={slideUp}
          display="flex"
          h="100vh"
          transitionDelay="0.5s"
          flex="1"
          flexDirection="column"
        >
          {slide3.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </Box>
        <Box
          animation={slideDown}
          display="flex"
          h="100vh"
          transitionDelay="0.75s"
          flex="1"
          flexDirection="column"
        >
          {slide4.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </Box>
        <Box
          animation={slideUp}
          display="flex"
          h="100vh"
          transitionDelay="1s"
          flex="1"
          flexDirection="column"
        >
          {slide5.map((img, id) => (
            <img
              key={id}
              className="p-2"
              src={img}
            />
          ))}
        </Box>
      </Box>
      <Box
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        right="0"
        bg="black"
        opacity="0.7"
      >
        <Box
          mx="auto"
          p="8"
          w="100%"
        >
          <Flex h="100%" direction="column" justify="space-between">
            <Flex justify="space-between" h="30vh">
              <Box>
                <Image src={Logo} alt="Logo" />
              </Box>
              <ButtonGroup gap="0">
                <Button
                  onClick={() => navigate("/join")}
                  backgroundColor="white"
                  borderRadius="3xl"
                >
                  JOIN
                </Button>

                <Button
                  onClick={() => navigate("/login")}
                  colorScheme="blackAlpha"
                  borderRadius="3xl"
                >
                  LOGIN
                </Button>
              </ButtonGroup>
            </Flex>
            <Grid templateColumns="repeat(12, 1fr)" gap={2} my="auto">
              <GridItem colSpan={9}>
                <Text textColor="white" fontSize="120px" letterSpacing="2px">
                  SPECIALLY DESIGNED <br /> FOR PHOTOGRAPHY
                </Text>
              </GridItem>
              <GridItem colSpan={5}>
                <Text p="1" textColor="white" fontSize="lg" letterSpacing="2px">
                  LEARN, SHARE AND ENHENCE YOUR PHOTO
                </Text>
              </GridItem>
            </Grid>
            <Box
              position="fixed"
              bottom="8"
              left="8"
              right="8"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textColor="white"
              fontSize="lg"
            >
              <h1>POWER BY GOOGLE AI</h1>
              <List
                display="flex"
                justifyContent="space-around"
                w="30%"
                cursor="pointer"
                px={3}
              >
                <ListItem>APP</ListItem>
                <ListItem>BLOG</ListItem>
                <ListItem>EXTENSIONS</ListItem>
                <ListItem>TERMS</ListItem>
                <ListItem>CONTACT</ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
