import React from "react"
import { Button } from "@chakra-ui/react"
import "./styles.scss"

export default function MenuItem ({ children, isLast, to = "/", ...rest }) {
    return (
    <Button d="block" lineHeight={1} color="teal" _hover={{ bg: "#d9e4ec" }} variant="ghost" size="lg" fontSize="20px" fontWeight="800">
        { children }
    </Button>
    )
  }
  