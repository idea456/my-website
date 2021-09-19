import React from "react";
import { Grid, GridItem, Text, Box, Image, HStack, Button, Center } from "@chakra-ui/react"
import profile from "../../images/profile.jpg"
import { FaGithub, FaLinkedin, FaRegEnvelope, FaRegFilePdf } from "react-icons/fa"

export default function Main() {
    const redirect = (link) => {
        window.location.href = link
    }

    const sendMail = () => {
        window.location.href = "mailto:riowongsoatmojo@gmail.com";
    }
    
    return (
        <>
            <Box d="flex" h="75vh" alignItems="center">
                <Grid
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                >
                    <GridItem colSpan={2}>
                        {/* <Image src={avatar} /> */}
                        <Image src={profile} borderRadius={20} h={450}/>
                    </GridItem>
                    <GridItem colSpan={3} alignSelf="center">
                        <Text fontSize={80} fontWeight={600} fontFamily="TT Commons">Adrienne Rio.</Text>
                        <Text fontSize={22} fontWeight={400}>
                            Hi there! I am a Computer Science student currently studying at
                            Monash University Malaysia. I am a passionate coder who loves to
                            invent applications to solve simple or even complex problems.
                        </Text>
                        <HStack spacing={4} mt={6}>
                            <Button onClick={() => redirect('https://www.linkedin.com/in/adrienne-rio/')} leftIcon={<FaRegFilePdf/>} colorScheme="orange">
                                <Text pt={1.5}>Resume</Text>   
                            </Button>
                            {/* <Button leftIcon={<FaWhatsapp />} colorScheme="whatsapp">WhatsApp</Button> */}
                            <Button onClick={() => redirect('https://www.linkedin.com/in/adrienne-rio/')} leftIcon={<FaLinkedin />} colorScheme="linkedin">
                                <Text pt={1.5}>LinkedIn</Text>   
                            </Button>
                            <Button onClick={() => redirect('https://github.com/idea456')} leftIcon={<FaGithub />} color="white" bg="black">
                                <Text pt={1.5}>Github</Text>   
                            </Button>
                            <Button onClick={() => sendMail()} leftIcon={<FaRegEnvelope />} colorScheme="red">
                                <Text pt={1.5}>Email</Text>   
                            </Button>
                        </HStack>
                    </GridItem>
                </Grid>
            </Box>
            <Box>
                <Center>
                    <Text fontSize={50}>👇</Text>
                </Center>
            </Box>
        </>
    )
}