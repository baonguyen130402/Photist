import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  Center,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const GetPro = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-x-6 font-sans">
        {<Header title="" atDiscover={false} />}
        <div className="top-16 w-full col-span-12 grid grid-cols-12 gap-x-6 bg-black py-4">
          <div className="col-span-12 bg-gradient-to-r from-[#d1913c] to-[#ffd194] h-[300px]">
          </div>
          <h1 className="col-start-2 col-span-7 uppercase text-7xl text-white leading-snug tracking-wide">
            upgrade to unlock all features
          </h1>
          <h1 className="col-start7 col-end-11 col-span-5 text-[#bbb] text-lg tracking-wide text-end">
            from $5.99 per month for individuals
          </h1>
          <div className="flex justify-center items-center flex-col bg-black text-white col-span-12 h-16">
            <label className="relative inline-flex items-center cursor-pointer mt-4">
              <span className="uppercase mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                annual
              </span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
              </div>
              <span className="uppercase ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                monthly
              </span>
            </label>
            <h1 className="cursor-pointer text-blue-600 mt-4">
              Save 25% when you choose annual
            </h1>
          </div>
          <div className="grid grid-cols-12 col-span-12 gap-x-6 mt-8">
            <div className="col-start-3 col-span-4 bg-[#111] text-white opacity-90 flex flex-col items-center justify-between cursor-default pb-40 pt-4">
              <h1 className="uppercase text-5xl font-thin">free</h1>

              <div className="w-full ml-4 -mt-3">
                <div className="mb-1 text-xs self-start font-medium">
                  186 images left
                </div>
                <div className="w-11/12 bg-gray-700 rounded-full h-1.5">
                  <div className="bg-gray-400 w-2/5 h-1.5 rounded-full">
                  </div>
                </div>
              </div>
              <div className="w-11/12 text-center">
                <h1 className="text-5xl tracking-wider font-semibold">
                  $0
                </h1>
                <button className="mt-12 uppercase bg-[#222] w-11/12 py-2 rounded-lg opacity-90">
                  your current plan
                </button>
              </div>
              <div className="flex flex-col w-full justify-start mt-16 pl-2 font-semibold">
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon
                    className="mr-3 text-blue-400"
                    icon={faCheck}
                  />
                  Save up to 200 images
                </div>
                <div className="flex items-center text-sm">
                  <FontAwesomeIcon
                    className="mr-3 text-blue-400"
                    icon={faCheck}
                  />
                  Create up to 2 boards
                </div>
              </div>
            </div>
            <div className="pt-4 col-start-7 col-span-4 bg-white flex flex-col justify-start">
              <div className="flex flex-col justify-center items-center">
                <h1 className="uppercase text-5xl font-thin">pro</h1>
                <h1 className="mt-6 text-5xl tracking-wider font-semibold">
                  $5.99
                </h1>
                <h1 className="text-gray-400 mb-4">Per month</h1>
                <button className="mb-2 uppercase bg-[#222] text-white w-11/12 py-2 rounded-lg opacity-90">
                  upgrade with card
                </button>
                <button className="uppercase bg-[#111] text-white w-11/12 py-2 rounded-lg opacity-60">
                  paypal register
                </button>
                <div className="flex flex-col w-full justify-start mt-16 pl-2 font-semibold pb-2">
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Unlimited images
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Unlimited boards
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Unlimited analyzed times
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Promotion for limited artworks
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Unlock AI features
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Unlock Mood and Colour by Professtions
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Higher request limits
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Eearly access to all new features
                  </div>
                  <div className="flex items-center text-sm">
                    <FontAwesomeIcon
                      className="mr-3 text-blue-400"
                      icon={faCheck}
                    />
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Center py={6} backgroundColor="black">
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              PRO
            </Text>
            <Text color={"gray.900"} mt="8">
              All the beset features we offer
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                79
              </Text>
              <Text color={"gray.500"}>/month</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                5.000 page views
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 automation executions
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                50 identified users
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                All features
              </ListItem>
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"green.400"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
              _hover={{
                bg: "green.500",
              }}
              _focus={{
                bg: "green.500",
              }}
            >
              Start your trial
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};
