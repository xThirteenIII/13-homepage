/*
    * The _app.js file in a Next.js project is a special file 
    * that allows to override the default App component and wrap 
    * pages with additional components or providers. 
*/
import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from "framer-motion";

const Website = ({
    Component,
    pageProps,
    router
}) => {

// the key prop is set to router.route to ensure that the component gets re-rendered when the route changes.
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
        <AnimatePresence mode="wait" initial={true}>
                <Component {...pageProps} key={router.route}/>
        </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
