import React, { useEffect, useState } from "react";
import { SocialConnect } from "../components/SocialConect";
import { MyImg_1, MyImg_2, MyImg_3 } from "../assets/png/JoinPage";
// import { PreLoader } from "../components/Preloader";
import axios from "axios";
import { Box, GridItem, Img, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useForm } from "../lib/Hooks";

export const Join = () => {
  const images = [
    MyImg_1,
    MyImg_2,
    MyImg_3,
  ];

  const [indexOfCurrentImg, setIndexOfCurrentImg] = useState(-1);

  useEffect(() => {
    setIndexOfCurrentImg(Math.floor(Math.random() * (images.length)));
  }, []);

  const initialValue = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useForm(initialValue);

  const registerUser = async (event: any) => {
    event.preventDefault();

    try {
      await axios
        .post("/join", { ...formValues });
      alert("Registration successful. Now you can log in");
    } catch (err) {
      alert("Registration failed. Please try again later");
    }
  };

  // Set title
  useEffect(() => {
    document.title = "Join with us";
  });

  return (
    <Box bg="black" w="100%" h="100vh" px={16} pb={8} position="relative">
      <SimpleGrid columns={12} w="100%" spacing={2}>
        <GridItem colStart={3} colSpan={8}>
          <Img
            src={images[indexOfCurrentImg]}
            h={500}
            w="100%"
          />
        </GridItem>
      </SimpleGrid>
      <Text mt="60px" color="white" fontSize="48px" w="100%">
        THE BEST COMMUNITY FOR PHOTOGRAPHERS
      </Text>
      <form className="w-full" onSubmit={registerUser}>
        <SimpleGrid columns={12} spacing={32} w="100%" mt={80}>
          <GridItem colSpan={3}>
            <Input
              type="text"
              name="name"
              onChange={setFormValues}
              w="100%"
              color="white"
              placeholder="NAME"
              bg="transparent"
              outline="none"
              borderBottom="solid 1px white"
              fontSize={18}
            >
            </Input>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              type="email"
              name="email"
              onChange={setFormValues}
              color="white"
              placeholder="EMAIL"
              w="100%"
              bg="transparent"
              outline="none"
              borderBottom="solid 1px white"
              fontSize={18}
            >
            </Input>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              type="text"
              name="username"
              onChange={setFormValues}
              color="white"
              placeholder="USERNAME"
              w="100%"
              bg="transparent"
              outline="none"
              borderBottom="solid 1px white"
              fontSize={18}
            >
            </Input>
          </GridItem>
          <GridItem colSpan={3}>
            <Input
              type="password"
              name="password"
              onChange={setFormValues}
              color="white"
              placeholder="PASSWORD"
              w="100%"
              bg="transparent"
              outline="none"
              borderBottom="solid 1px white"
              fontSize={18}
            >
            </Input>
          </GridItem>
        </SimpleGrid>
        <div className="my-8">
          <p className="text-f5 w-full font-sans uppercase text-sm font-semibold tracking-wide mb-4">
            by creating account, you accept out terms
          </p>

          <button className="text-25 bg-f5 text-sm font-sans font-semibold uppercase py-1.5 px-6 rounded-2xl duration-300 hover:bg-gray-300">
            join
          </button>
        </div>
      </form>
      <div className="w-full font-sans absolute bottom-3">
        <SocialConnect />
      </div>
    </Box>
  );
};
