import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('very_soft_iris', 'white')
    return (
        // legacyBehaviour needed to avoid hydratation error
        <NextLink href={href} legacyBehavior>
            <Link
                p={2}
                bg={active ? 'very_soft_iris' : undefined}
                color={active ? 'dark_iris' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {

    /* The props object is destructured to extract the path property.
     * This allows the component to access the path directly.
     */
    const { path } = props 

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('dark_iris', 'iris80')}
            style={{backdropFilter:'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container 
                display="flex" 
                p={2}
                maxW="container.md"
                wrap="wrap"
                alignItems="center"
                justify="space-between"
            >

                <Flex alignItems="center" mr={5}>
                    <Heading as="h2" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, nmd: 0}}
                >
                    <LinkItem href="/work" path={path}>
                        Work
                    </LinkItem>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options" bg={useColorModeValue('very_soft_iris','dark_iris')}
                            />
                            <MenuList bg={useColorModeValue('very_soft_iris','dark_iris')}>
                                <NextLink href="/" passHref legacyBehavior>
                                    <MenuItem as={Link} bg={useColorModeValue('very_soft_iris','dark_iris')}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/work" passHref legacyBehavior>
                                    <MenuItem as={Link} bg={useColorModeValue('very_soft_iris','dark_iris')}>Work</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref legacyBehavior>
                                    <MenuItem as={Link} bg={useColorModeValue('very_soft_iris','dark_iris')}>Projects</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
