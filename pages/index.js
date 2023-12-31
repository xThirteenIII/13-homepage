import { 
    Container, 
    Box,
    Heading, 
    Image, 
    Link,
    SimpleGrid,
    useColorModeValue, 
    Button, 
    List,
    Icon,
    ListItem} from '@chakra-ui/react'
import { GlitchText } from 'glitch-text'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioYear, BioSelection } from '../components/bio'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { GridItem } from '../components/grid-item'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoReddit,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box 
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6} 
            align="center" 
            textColor={useColorModeValue('dark_iris', 'very_soft_iris')}
            fontFamily={"Ubuntu Mono"}
            >
                Hi !Hola Ciao 你好 Kamusta Hej 안녕 γεια σας Привіт
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        <div style={{fontSize: '30px'}}>
                            <GlitchText theme='purple' text={'Giuseppe Richetti'} />
                        </div>
                    </Heading>
                    <p style={{fontFamily:"Ubuntu Mono"}}> Computer Science Engineer </p>
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
                        src="/images/ncazzato.png"
                        alt="Profile Pic"
                    />
                </Box>
             </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                 Projects
                </Heading>
                <Paragraph>
                Hi, this site was made to learn and get confidence with React and at the same time to create a sort of online CV. 
        I recently graduated @ Politecnico di Milano in Engineering of Computying Systems. My studies were both focused on Telecommunications and Computer Science. Last year I worked as a Full Stack Developer which put me on the road to programming, although my dream is to be able to work with both the Telecom and Computer Science worlds.
            </Paragraph> 
                <Box align="center" my={4}>
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme = {useColorModeValue('teal', 'teal')}>
                        projects 
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                Bio
                </Heading>
                <BioSelection>
                    <BioYear>
                    1993
                    </BioYear>
                Born in Milan, Italy.
                </BioSelection>
                <BioSelection>
                    <BioYear>
                    1997
                    </BioYear>
                Started playing the piano.
                </BioSelection>
                <BioSelection>
                    <BioYear>
                    1999
                    </BioYear>
                Played my first video game.
                </BioSelection>
                <BioSelection>
                    <BioYear>
                    2004
                    </BioYear>
                Enrolled at the "G.Verdi" Conservatory in Milan.
                </BioSelection>
                <BioSelection>
                    <BioYear>
                    2014
                    </BioYear>
                Smoked my first cigarette.
                </BioSelection>
                <BioSelection>
                    <BioYear>
                    2022
                    </BioYear>
                Worked as a Full Stack Developer at Valuebin S.r.l on
                <NextLink href="https://zeroed.earth" legacyBehavior>
                    <Link> Zeroed
                            <ExternalLinkIcon mx="2px" />
        </Link>
            
                </NextLink>.
                </BioSelection>
                <BioSelection>
                    <BioYear>
                    2023
                    </BioYear>
                Graduated @ Politecnico di Milano.
                </BioSelection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                I love
                </Heading>
                <Paragraph>
                    Piano, Programming (too cheesy?) , Taekwondo, Beach Volley, Volley, Video Games, Disney, You {'<3'}
                </Paragraph>
            </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <List>
            <ListItem>
                <Link href="https://www.linkedin.com/in/giusepperichetti/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />} >
                @Giuseppe Richetti
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://github.com/xThirteenIII" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />} >
                @xThirteenIII
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://instagram.com/jisaa_" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />} >
                @jisaa_
                </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://reddit.com/u/XThirteenIII" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoReddit} />} >
                @XThirteenIII
                </Button>
                </Link>
            </ListItem>
        </List>
        </Section>
        </Container>
        </Layout>
    )
}

// Exporting as default allows you to import the component with any name 
// in the importing module.
export default Page
