import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, border } from '@chakra-ui/react'
import { Global } from '@emotion/react'

// Thumbnails .png are 690x595

export const GridItem = ({ 
    children,
    href,
    title,
    thumbnail
}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
            src={thumbnail}
            alt={title}
            className='grid-item-thumbnail'
            placeholder='blur'
            loading='lazy' />
            <LinkOverlay href={href} target='_blank'>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ProjectsGridItem = ({ 
        children,
        id,
        title,
        thumbnail
}) => (
    <Box w="100%" align="center">
        <NextLink href={`/projects/${id}`} legacyBehavior>
            <LinkBox cursor="pointer">
                <Image
                src={thumbnail}
                alt={title}
                height={500}
                className='grid-item-thumbnail'
                placeholder='blur'
                />
                <LinkOverlay href={`/projects/${id}`}>
                    <Text mt={2} fontSize={20}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)
