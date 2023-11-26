import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="ICTF Segrate">
            <Container>
                <Title>
                ICTF Segrate
                </Title>
                <P>
                This is a prototype made for the International Chang-Hon Taekwon-do Federation located in Segrate, Milan. That's where I've been practicing both Taekwon-do and Kick-boxing for the last 6 years.
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
                        <Link href='https://github.com/xThirteenIII/tkd-site'>
github.com/xThirteenIII/tkd-site
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>c++</span>
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
                <ProjectImage src="/images/projects/tkd.png" alt="Extinguish-Us" />
                <ProjectImage src="/images/projects/tkd2.png" alt="Extinguish-Us" />
            </Container>
        </Layout>
    )
}

export default Project
