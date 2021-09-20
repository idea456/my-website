import React, { useState } from "react"
import { Box,  Heading } from "@chakra-ui/react"
import Filter from "../../components/Project/Filter"
import ProjectItem from "../../components/Project/ProjectItem"
import projectsJson from '../../data/projects.json'
import Transition from "../../components/Layout/Transition"


export default function Projects() {
    const { projects ,  filter } = JSON.parse(JSON.stringify(projectsJson))
    const [list, setList] = useState(projects)

    return (
        <Box py={20}>
            <Heading as="h1" size="4xl" mb={5}>PROJECTS</Heading>
            <Filter items={filter} setList={setList} projects={projects} />
            {list.map((project, i) => {
                return (
                <Transition>
                    <ProjectItem 
                        key={i} 
                        title={project.title} 
                        description={project.description} 
                        link={project.githubLink} 
                        techStack={project.techStack} 
                    />
                </Transition>
                )
            })}
        </Box>
    )
}