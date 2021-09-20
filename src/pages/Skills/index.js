import React from "react"
import { Box,  SimpleGrid, Heading, GridItem } from "@chakra-ui/react"
import SkillItem from "../../components/Skill/SkillItem"
import skillsJson from "../../data/skills.json"


export default function Skills() {
    const { skills } = JSON.parse(JSON.stringify(skillsJson))

    return (
        <Box pt="20vh" pb="10vh">
            <Heading as="h1" size="2xl" mb={12}>🛠 Skills</Heading>
            <SimpleGrid
                rows={[4, 4, 1]}
                columns={[1, 1, 4]}
                gap={10}
            >
                {skills.map((skill, i) => {
                    return (    
                        <GridItem key={i} colSpan={1}>
                            <SkillItem category={skill.type} skills={skill.list} />
                        </GridItem>)
                })
                }
            </SimpleGrid>
        </Box>
    )
}