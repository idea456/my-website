import React, { useState, useEffect } from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Filter({ items, setList, projects }) {
    const [tags, setTags] = useState(items.map((item) => {
        return {
            ...item,
            active: false
        }
    }))
    const [activeTags, setActiveTags] = useState([])

    const checkTechStack = (techStack) => {
        // check if the active tags are a subset of the tech stack in the project
        return activeTags.every((tag) => techStack.includes(tag.techStack));
    };

    const filterByTags = (item) => {
        item.active = !item.active
        if (item.active === false) {
            setActiveTags(activeTags.filter(tag => tag.name !== item.name))
        } else {
            if (item.name === 'All') {
                console.log('tags',  tags)
                setTags(tags.map(tag => {
                    return {
                        ...tag,
                        active: false
                    }
                }))
                setActiveTags([])
            } else {
                setActiveTags([...activeTags, {...item, active: !item.active}])
            }
        }
    }
    
    useEffect(() => {
        setList(projects.filter((p) => checkTechStack(p.techStack)));

        // if user does not select any filter, automatically select 'All' filter
        tags[0].active = activeTags.length === 0;
    }, [activeTags]);

    return (
        <Box d="flex" direction="row" flexWrap="wrap">
            {tags.map((item, i) => {
                return (
                    <Text 
                    key={i}
                    fontSize={34}
                    fontWeight={700} 
                    cursor="pointer" 
                    color={item.active ? 'black' : "#c9d6df"} 
                    _hover={{color: 'black'}} 
                    mr={6}
                    onClick={() => filterByTags(item)}
                    >
                        {item.name}
                    </Text>
                )
            })}
        </Box>
    )
}