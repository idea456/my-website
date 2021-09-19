import React from "react"
import { Box, Heading, Tooltip, VStack, Image, AspectRatio } from "@chakra-ui/react"


export default function SkillItem({ category, skills }) {
    return (
        <Box>
            <Heading as="h3" fontSize={34} mb={4}>{category}</Heading>
            <VStack align="start" spacing={5}>
                {skills.map((skill, i)  => {
                    return (
                        <Tooltip key={i}  boxShadow="sm" label={skill.description} bg="white" borderRadius={5} color="black" fontFamily="TT Commons" fontSize={20} p={10}>
                            <Heading key={i} as="h4" fontSize={30} color="gray.400" fontWeight={600} cursor="pointer" _hover={{ color: 'black' }}>
                                {skill.name}
                            </Heading>
                        </Tooltip>
                    )
                })}
            </VStack>
        </Box>
    )
}
