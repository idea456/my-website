import React from "react";
import { SimpleGrid, GridItem, Text, Box, Image, HStack, Button, Center } from "@chakra-ui/react"
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
            <Box d="flex" h={["100vh", "100vh", "75vh", "75vh"]} alignItems="center">
                <SimpleGrid
                    rows={[2,2, 2, 1]}
                    columns={[1,1, 1, 2]}
                >
                    <Box d="flex" justifyContent={["center", "center", "flex-end", "flex-end"]} pr={[0, 0, "2vw", "3vw"]}>
                        <Image src={profile} borderRadius={20} h={450} textAlign="center" />
                    </Box>
                    <Box alignSelf="center">
                        <Text fontSize={[50, 50, 80, 80]} fontWeight={600} pt={5} fontFamily="TT Commons">Adrienne Rio.</Text>
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
                    </Box>
                </SimpleGrid>
            </Box>
            <Box py={[20, 10, 0, 0]}>
                <Center>
                    <Text fontSize={50}>⬇️</Text>
                </Center>
            </Box>
        </>
    )
}