import React, { useRef, useState } from "react";
import { Grid, GridItem, Text, Box, ScaleFade } from "@chakra-ui/react"
import useOnScreen from "../../hooks/detect";

export default function About({ location }) {
    const ref = useRef()
    const exRef = useRef()
    const isVisible = useOnScreen(ref)
    const expIsVisible = useOnScreen(exRef)
    

    return (
        <Box d="flex" pt="2vh" pb="10vh" h="100vh" alignItems="center">
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(1, 1fr)"
                alignItems="stretch"
                gap={10}
            >
                <ScaleFade initialScale={0.5} in={isVisible} delay={0.2}>
                    <GridItem ref={ref} rowSpan={1} bgColor="white" p={10} borderRadius={20}>
                        <Text fontSize={50} fontWeight={600} mb={3}>✌️ A bit about me</Text>
                        <Text fontSize={22} fontWeight={400}>
                        Hi there! I am a Computer Science student currently studying at
                        Monash University Malaysia. I am a passionate coder who loves to
                        invent applications to solve simple or even complex problems. I
                        mostly spend most of my free time making fun projects with React
                        or Vue. I also love working with great teams and always give my
                        best when contributing something.
                        </Text>
                    </GridItem>
                </ScaleFade>
                <ScaleFade initialScale={0.5} in={expIsVisible} delay={0.2}>
                    <GridItem ref={exRef} rowSpan={1} bgColor="white" p={10} borderRadius={20}>
                        <Text fontSize={50} fontWeight={600} mb={3}>🎓 Education background</Text>
                        <Text fontSize={22} fontWeight={400}>
                        Hi there! I am a Computer Science student currently studying at
                        Monash University Malaysia. I am a passionate coder who loves to
                        invent applications to solve simple or even complex problems. I
                        mostly spend most of my free time making fun projects with React
                        or Vue. I also love working with great teams and always give my
                        best when contributing something.
                        </Text>
                    </GridItem>
                </ScaleFade>
            </Grid>
        </Box>
    )
}