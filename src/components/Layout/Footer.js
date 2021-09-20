import React from "react"
import { Box, HStack } from "@chakra-ui/react"
import { FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer () {
    return (
        <Box py={20}>
            <HStack justifyContent="flex-end" spacing={8} >
                <FaGithubAlt fontSize={40}/>
                <FaLinkedin fontSize={38}/>
                <FaEnvelope fontSize={38}/>
            </HStack>
        </Box>
    )
}