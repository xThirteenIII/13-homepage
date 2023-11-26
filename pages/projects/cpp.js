import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="c++ Console Game">
            <Container>
                <Title>
                c++ Console Game
                </Title>
                <P>
                A turn-based console game featuring, for the time being, one floor and one enemy. The main goal of this project was to learn c++ and its most common design patterns. It was kinda hard to jump into it without knowing c++ in the first place but at the end of it it was worth it.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://xthirteeniii.github.io/tkd-site/'>
xthirteeniii.github.io/tkd-site/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Repository</Meta>
                        <Link href='https://github.com/xThirteenIII/cpp-console-game'>
        github.com/xThirteenIII/cpp-console-game
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>c++</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Linux, Mac OS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Design Patterns</Meta>
                        <span>Singleton, State, Factory, Abstract </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Version Control</Meta>
                        <span>Git, Lazygit</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/cpp.png" alt="Extinguish-Us" />
                <ProjectImage src="/images/projects/cpp2.png" alt="Extinguish-Us" />
            </Container>
        </Layout>
    )
}

export default Project
