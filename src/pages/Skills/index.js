import React from "react"
import { Box,  Grid, Heading, GridItem } from "@chakra-ui/react"
import SkillItem from "../../components/Skill/SkillItem"
import skillsJson from "../../data/skills.json"


export default function Skills() {
    const { skills } = JSON.parse(JSON.stringify(skillsJson))

    return (
        <Box pt="20vh" pb="10vh">
            <Heading as="h1" size="2xl" mb={12}>🛠 Skills</Heading>
            <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={10}
            >
                {skills.map((skill, i) => {
                    return (    
                        <GridItem key={i} colSpan={1}>
                            <SkillItem category={skill.type} skills={skill.list} />
                        </GridItem>)
                })
                }
            </Grid>
        </Box>
    )
}