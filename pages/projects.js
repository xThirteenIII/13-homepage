import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'

import thumbExtinguish from '../public/images/projects/'

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
            <ProjectsGridItem id="exinguish" title="Extinguish Us" thumbnail={thumbExtinguish}>
            A website which uses public NASA APIs to show, if there's any, hazardous asteroids orbiting today around Earth.
            </ProjectsGridItem>
            </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects
