import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectsGridItem } from '../components/grid-item'

import thumbExtinguish from '../public/images/projects/extinguish.png'
import thumbCpp from '../public/images/projects/cpp2.png'
import thumbTkd from '../public/images/projects/tkd.png'
import thumbEmulator from '../public/images/projects/MOS.jpg'
import Layout from '../components/layouts/article'
import Project from './projects/extinguish'

const Projects = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>

                <Section>
                <ProjectsGridItem id="emulator" title="6502 Emulator" thumbnail={thumbEmulator}>
                An emulator for the 8-bit 6502 microprocessor from 1975.
                </ProjectsGridItem>
                </Section>

                <Section>
                <ProjectsGridItem id="extinguish" title="Extinguish Us" thumbnail={thumbExtinguish}>
                A website which uses public NASA APIs to show, if there's any, hazardous asteroids orbiting today around Earth.
                </ProjectsGridItem>
                </Section>

                <Section>
                    <ProjectsGridItem id="cpp" title="C++ Console Game" thumbnail={thumbCpp}>
                    A simple turn-based game, in a very early stage, made mainly to train with OOP and c++. But it works!
                    </ProjectsGridItem>
                </Section>

                <Section>
                    <ProjectsGridItem id="tkd" title="Taekwondo Website" thumbnail={thumbTkd}>
                    A website prototype for the ICTF Segrate association where I practice Taekwondo and Kickboxing. 태권!
                    </ProjectsGridItem>
                </Section>

            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects
