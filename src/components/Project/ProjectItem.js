import React from "react"
import { Box, Heading, Text, Button,  HStack, Image } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"


export default function ProjectItem({ title, description, link, techStack }) {
    const redirect = (link) => {
        window.location.href = link
    }
    
    return (
        <Box borderRadius={20} p={10} mt={10} bg="white" boxShadow="sm">
            <Heading pb={3} size="xl">{title}</Heading>
            <Text pb={5} fontSize={20}>{description}</Text>
            <HStack spacing={4}>
                {techStack.map((tech, i) => {
                    if (tech !== 'ux-design' && tech !== 'oop') {
                        return <img key={i} src={`https://unpkg.com/simple-icons@v3/icons/${tech}.svg`} width="25" />
                    }
                })}
            </HStack>
            <Button colorScheme="teal" leftIcon={<FaGithub /> } onClick={() => redirect(link)} mt={5}>
                <Text pt={1.5}>View More</Text>   
            </Button>
        </Box>
    )
}