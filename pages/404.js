import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">なぁに??</Heading>
                <Text> It seems like the page you&apos;re looking for can't be found anywhere.
                </Text>
            <Divider my={6} align="center"/>
            <Box my={6} align="center">
                <NextLink href="/">
                <Button colorScheme='teal'>Return to casa</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
