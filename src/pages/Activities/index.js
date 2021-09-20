import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PostItem from "../../components/Post/PostItem"
import { SimpleGrid,  Heading, Box } from "@chakra-ui/react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Transition from "../../components/Layout/Transition";


export default function Experience() {
    const data = useStaticQuery(
        graphql`
        query {
            allContentfulActivities {
              totalCount
              edges {
                node {
                    title
                    activityDescription {
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
        <Box pt="12vh" alignItems="stretch">
            <Heading as="h1" size="2xl" mb={12}>📝 Activities</Heading>
            <SimpleGrid
                rows={[1, 1, Math.ceil(data.allContentfulActivities.totalCount / 2)]}
                columns={[1, 1, 2]}
                gap={12}
            >
            {data.allContentfulActivities.edges.map((edge, i) => {
                return (
                    <Transition>
                            <PostItem 
                                key={i}
                                title={edge.node.title} 
                                description={documentToReactComponents(JSON.parse(edge.node.activityDescription.raw))} 
                                image={edge.node.featuredImage.fluid.src} 
                                company={edge.node.company}
                                date={edge.node.date}
                            />
                    </Transition>
                )
            })}
        </SimpleGrid>
        </Box>
    )
}