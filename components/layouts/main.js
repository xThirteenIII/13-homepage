import Head from "next/head";
import NavBar from "../navbar.js"
import { Box, Container } from "@chakra-ui/react"

// In Next.js, the Head component is used to modify the HTML <head> tag,
// and Box is a layout component provided by the Chakra UI library.


/*  This code defines a functional component named Main.
 *  The component takes two props as arguments: children and router.
 *  Props are properties that can be passed into a component to customize
 *  its behavior or content.
 */
const Main = ({children, router}) => {

/* The return statement begins the JSX (JavaScript XML) portion of the 
 * component. JSX is a syntax extension for JavaScript that resembles XML 
 * or HTML. In this case, a Box component is used as the root container 
 * for the content of the Main component.
 * The as prop is used to specify the HTML element that the Box component 
 * should render as. In this case, it renders as a <main> element.
 * The pb (padding bottom) prop is set to 8, indicating that 
 * there should be a padding of 8 units at the bottom of the Box
 */
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Th1rt3en - Homepage</title>
            </Head>
            
            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main

