import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="6502 Cpu Emulator">
            <Container>
                <Title>
                6502 Emulator
                </Title>
                <P>
                A 6502 cpu emulator. The intent was to better understand how cpu works and handles instructions, dealing with memory and opcodes.
                Implementing each instruction with each addressing mode to make programs actually work on the emulator.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Repository</Meta>
                        <Link href='https://github.com/xThirteenIII/6502-emulator'>
        github.com/xThirteenIII/6502-emulator
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>go</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Linux, Mac OS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>References</Meta>
                        <Link href='http://www.6502.org/users/obelisk/'>
http://www.6502.org/users/obelisk/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                        <Link href='https://sta.c64.org/cbm64mem.html'>
https://sta.c64.org/cbm64mem.html
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                        <p/>
                        <Link href='https://www.c64-wiki.com/wiki/Reset_(Process)'>
https://www.c64-wiki.com/wiki/Reset_(Process)
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Version Control</Meta>
                        <span>Git, Lazygit</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project
