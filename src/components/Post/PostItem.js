import React, { useState } from "react"
import { Box, Heading, Text, HStack, Image, AspectRatio, Button, Collapse } from "@chakra-ui/react"


export default function PostItem({ title, description, image, company, date, isExperience = false }) {
    const [show, setShow ] = useState(false)
    return (
        <Box bgColor="white" borderRadius={20}>
            {image && (<AspectRatio ratio={16 / 9} mb={10}>
                <Image borderTopRadius={20} src={image} fit="scale-down" _hover={{ cursor: 'pointer', zIndex: 9999, opacity: 0.8 }}/>
            </AspectRatio>)}
            <Heading as="h3" pl={10} pr={10} fontSize={34} mb={2}>{title}</Heading>
            <HStack pl={10} pr={10} justify="space-between" mb={4}>
                <Heading as="h4" fontSize={24} color="gray.500" fontWeight={600}>{company}</Heading>
                <Heading as="h4" fontSize={20} color="gray.500" fontWeight={600}>{date}</Heading>
            </HStack>
            <Text pl={10} pr={10} pb={10} fontSize={22} fontWeight={400}>
                {!isExperience && !show && (
                    <>
                        {description[0].props.children[0].slice(0, 200)}...
                    </>
                )}
                {(isExperience || show) && description}
                &nbsp;

                {!isExperience && 
                    <Button variant="link" colorScheme="teal" size="lg" onClick={() => setShow(!show)}>
                        Show {show ? "Less" : "More"}
                    </Button>
                }
            </Text>
        </Box>
    )
}