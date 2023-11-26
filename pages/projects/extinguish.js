import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Extinguish">
            <Container>
                <Title>
                Extinguish Us
                </Title>
                <P>
                A website to check if any hazardous asteroid is going to crush on Earth today. Since I like both Space and black humour it seemed like a cool idea to combine them. For the more life enthusiastic types, you can also check NASA picture of the day and National Geographic best pics of the Month.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://xthirteeniii.github.io/extinguish-us/'>
                xthirteeniii.github.io/extinguish-us/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Repository</Meta>
                        <Link href='https://github.com/xThirteenIII/extinguish-us/'>
        https://github.com/xThirteenIII/extinguish-us/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>APIs</Meta>
                        <Link href='https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY'>
        NASA Asteroids NeoWs - GET request DEMO
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Version Control</Meta>
                        <span>Git, Lazygit</span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/extinguish.png" alt="Extinguish-Us" />
                <ProjectImage src="/images/projects/extinguish2.png" alt="Extinguish-Us" />
            </Container>
        </Layout>
    )
}

export default Project
