import { Container, Box, Heading, Image } from '@chakra-ui/react'
import { GlitchText } from 'glitch-text'
import { useColorModeValue } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#5D3FD3" p={3} mb={6} align="center" textColor='white' fontFamily={"Ubuntu Mono"}>
            Hi !Hola Ciao 你好 Kamusta Hej 안녕 γεια σας Привіт
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        <div style={{fontSize: '40px'}}>
                            <GlitchText theme='purple' text={'Giuseppe Richetti'}/>
                        </div>
                    </Heading>
                    <p color={useColorModeValue('orange', 'very_soft_iris')} style={{fontFamily:"Ubuntu Mono"}}> Computer Science Engineer </p>
                </Box>
            <Box flexShrink={0}
                mt={{base: 4, md: 0}} 
                ml={{md: 6}}
                align="center"
            >
        <Image 
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/face.jpg"
            alt="Profile Pic"
        />
            </Box>
            </Box>
        </Container>
    )
}

// Exporting as default allows you to import the component with any name 
// in the importing module.
export default Page

