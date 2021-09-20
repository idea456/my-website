import React, {  useState } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Image,
    AspectRatio,
} from "@chakra-ui/react"
import "./styles.scss"

export default function PostImage({ url }) {
    const [open, setOpen] = useState(open)
    
    return (
        <>
        <Modal size="4xl" isCentered isOpen={open} onClose={()  => setOpen(false)}>
            <ModalOverlay />
                <ModalContent>
                    <Image src={url} objectFit="cover"/>
                </ModalContent>
        </Modal>

        {url && (
            <>
            <AspectRatio ratio={16 / 9} mb={10} onClick={() => setOpen(true)}>
                <Image borderTopRadius={20} src={url} fit="scale-down" className="post-image"/>
            </AspectRatio>
            </>
            )}
        </>
    )
}