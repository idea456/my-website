import React, { useEffect, useState, useRef } from "react"
import { ScaleFade } from "@chakra-ui/transition";
import useOnScreen from "../../hooks/detect"

export default function Transition({ children }) {
    const [viewed, setViewed] = useState(false)
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        console.log('viewed?' , viewed)
        if (isVisible && !viewed) {
            setViewed(true)
        }
    }, [isVisible])

    return (
        <ScaleFade ref={ref} initialScale={0.5} in={viewed} delay={0.2}>
            {children}
        </ScaleFade>
    )
}