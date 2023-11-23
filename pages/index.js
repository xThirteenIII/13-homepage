import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#5D3FD3" p={3} mb={6} align="center" textColor='white'>
            Hi !Hola Ciao 你好 Kamusta Hej 안녕 γεια σας Привіт
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Giuseppe Richetti
                    </Heading>
                    <p> Computer Science Engineer </p>
                </Box>
            </Box>
        </Container>
    )
}

// Exporting as default allows you to import the component with any name 
// in the importing module.
export default Page

