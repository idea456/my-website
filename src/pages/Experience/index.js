import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostItem from "../../components/Post/PostItem"
import { SimpleGrid, Heading, Box } from "@chakra-ui/react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Transition from "../../components/Layout/Transition";


export default function Experience() {
    const data = useStaticQuery(
        graphql`
        query {
            allContentfulExperience {
              totalCount
              edges {
                node {
                    title
                    workDescription {
                        raw
                    }
                    company
                    date
                    featuredImage {
                        fluid {
                            src
                        }
                    }
                }
              }
            }
          } 
        `
    )

    return (
        <Box alignItems="stretch">
            <Heading as="h1" size="2xl" mb={12}>💻 Experience</Heading>
            <SimpleGrid
                rows={[1, 1, Math.ceil(data.allContentfulExperience.totalCount / 2)]}
                columns={[1, 1, 2]}
                gap={12}
            >
            {data.allContentfulExperience.edges.map((edge, i) => {
                return (
                    <Transition>
                            <PostItem
                                key={i}
                                title={edge.node.title} 
                                description={documentToReactComponents(JSON.parse(edge.node.workDescription.raw))} 
                                image={edge.node.featuredImage.fluid.src} 
                                company={edge.node.company}
                                date={edge.node.date}
                                isExperience
                            />
                    </Transition>
                )
            })}
        </SimpleGrid>
        </Box>
    )
}