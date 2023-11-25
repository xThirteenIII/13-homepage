import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'

import thumbExtinguish from '../public/images/projects/extinguish.png'
import thumbCpp from '../public/images/projects/cpp2.png'
import thumbTkd from '../public/images/projects/tkd.png'

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

                <Section>
                    <ProjectsGridItem id="c++ console game" title="C++ Console Game" thumbnail={thumbCpp}>
                    A simple turn-based game, in a very early stage, made mainly to train with OOP and c++. But it works!
                    </ProjectsGridItem>
                </Section>

                <Section>
                    <ProjectsGridItem id="taekdonwdo" title="Taekwondo Website" thumbnail={thumbTkd}>
                    A website prototype for the ICTF Segrate association where I practice Taekwondo and Kickboxing. 태권!
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects
