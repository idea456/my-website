import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostItem from "../../components/Post/PostItem"
import { Grid, GridItem, Heading, Box } from "@chakra-ui/react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
            <Grid
                templateRows={`repeat(${Math.ceil(data.allContentfulExperience.totalCount / 2)}, 1fr)`}
                templateColumns="repeat(2, 1fr)"
                gap={12}
            >
            {data.allContentfulExperience.edges.map((edge, i) => {
                return (
                    <GridItem key={i} rowSpan={1} colSpan={1}>
                        <PostItem
                            title={edge.node.title} 
                            description={documentToReactComponents(JSON.parse(edge.node.workDescription.raw))} 
                            image={edge.node.featuredImage.fluid.src} 
                            company={edge.node.company}
                            date={edge.node.date}
                            isExperience
                        />
                    </GridItem>
                )
            })}
        </Grid>
        </Box>
    )
}