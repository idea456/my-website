import React, { useState } from "react"
import { Box,  Heading, Button, Text  } from "@chakra-ui/react"
import Filter from "../../components/Project/Filter"
import ProjectItem from "../../components/Project/ProjectItem"
import projectsJson from '../../data/projects.json'


export default function Projects() {
    const { projects ,  filter } = JSON.parse(JSON.stringify(projectsJson))
    const [list, setList] = useState(projects)

    return (
        <Box pt="20vh">
            <Heading as="h1" size="4xl" mb={5}>PROJECTS</Heading>
            <Filter items={filter} setList={setList} projects={projects} />
            {list.map((project, i) => {
                return <ProjectItem key={i} title={project.title} description={project.description} link={project.githubLink} techStack={project.techStack} /> 
            })}
        </Box>
    )
}