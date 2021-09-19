import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostItem from "../../components/Post/PostItem"
import { Grid, GridItem, Heading, Box } from "@chakra-ui/react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
            <Grid
                templateRows={`repeat(${Math.ceil(data.allContentfulActivities.totalCount / 2)}, 1fr)`}
                templateColumns="repeat(2, 1fr)"
                gap={12}
            >
            {data.allContentfulActivities.edges.map(edge => {
                return (
                    <GridItem rowSpan={1} colSpan={1}>
                        <PostItem 
                            title={edge.node.title} 
                            description={documentToReactComponents(JSON.parse(edge.node.activityDescription.raw))} 
                            image={edge.node.featuredImage.fluid.src} 
                            company={edge.node.company}
                            date={edge.node.date}
                        />
                    </GridItem>
                )
            })}
        </Grid>
        </Box>
    )
}