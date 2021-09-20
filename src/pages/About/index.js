import React, { useRef, useState } from "react";
import { SimpleGrid, GridItem, Text, Box, ScaleFade } from "@chakra-ui/react"
import Transition from "../../components/Layout/Transition";

export default function About({ location }) {
    const ref = useRef()
    const exRef = useRef()
    

    return (
        <Box d="flex" pt="4vh" pb="10vh" alignItems="center">
            <SimpleGrid
                rows={2}
                columns={1}
                alignItems="stretch"
                gap={10}
            >
                <Transition>
                    <Box ref={ref} bgColor="white" p={10} borderRadius={20}>
                        <Text fontSize={[40, 40, 50, 50]} fontWeight={600} mb={3}>✌️ A bit about me</Text>
                        <Text fontSize={[18, 18, 22, 22]} fontWeight={400}>
                        Hi there! I am a Computer Science student currently studying at
                        Monash University Malaysia. I am a passionate coder who loves to
                        invent applications to solve simple or even complex problems. I
                        mostly spend most of my free time making fun projects with React
                        or Vue. I also love working with great teams and always give my
                        best when contributing something.
                        </Text>
                    </Box>
                </Transition>
                <Transition>
                    <Box ref={exRef} bgColor="white" p={10} borderRadius={20}>
                        <Text fontSize={[40, 40, 50, 50]} fontWeight={600} mb={3}>🎓 Education background</Text>
                        <Text fontSize={[18, 18, 22, 22]} fontWeight={400}>
                        Hi there! I am a Computer Science student currently studying at
                        Monash University Malaysia. I am a passionate coder who loves to
                        invent applications to solve simple or even complex problems. I
                        mostly spend most of my free time making fun projects with React
                        or Vue. I also love working with great teams and always give my
                        best when contributing something.
                        </Text>
                    </Box>
                </Transition>
            </SimpleGrid>
        </Box>
    )
}