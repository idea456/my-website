import React from "react"
import { Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem"

export default function Links(props) {
  return (
    <Stack
    spacing={1}
    align="center"
    justify={["center", "space-between", "flex-end", "flex-end"]}
    direction={["column", "row", "row", "row"]}
    pt={[4, 4, 0, 0]}
    >
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/about">About</MenuItem>
    <MenuItem to="/projects">Projects</MenuItem>
    </Stack>
  )
}
