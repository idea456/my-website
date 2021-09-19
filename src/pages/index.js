import React from "react"
import { Container, ChakraProvider } from "@chakra-ui/react"
import { Helmet } from 'react-helmet'
import { primary } from "../constants/colors"
import NavBar from "../components/Layout/NavBar"
import Background from "../components/Layout/Background"
import Footer from "../components/Layout/Footer"
import Main from "./Main"
import About from "./About"
import Experience  from "./Experience"
import Activities from "./Activities"
import Skills from "./Skills"
import Projects from "./Projects"
import Fonts from "../components/Fonts"
import theme from "./theme"
import "./styles.scss"


const MainPage = () => {
  return (
    <div style={{position: 'relative', overflow: 'hidden'}}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Background />
        <Container maxW="container.xl" minH="100vh">
          <NavBar />
          <Helmet>
            <style>{`body { background-color: ${primary}; }`}</style>
          </Helmet>
          <Main />
          <About />
          <Experience />
          <Activities />
          <Skills />
          <Projects />
          <Footer />
        </Container>
      </ChakraProvider>
    </div>
  )
}

export default MainPage
