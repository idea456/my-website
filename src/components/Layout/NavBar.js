import React from "react"
import { Flex, Image } from "@chakra-ui/react"
import Links from "./Links"
import avatar from "../../images/avatar.png"

export default function NavBar({ children, ...props }) {
    return (
      <Flex
        as="nav"
        align="center"
        justify="flex-end"
        wrap="wrap"
        w="100%"
        mb={8}
        pt={8}
        pb={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {/* <Image d="absolute" src={avatar} h={20} left={0}/> */}
        <Links />
      </Flex>
    )
  }
  