import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("#b8b3ea", "#0f0c2d")(props),
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#0f0c2d', '#b8b3ea')(props),
            textUnderlineOffset: 3,

        })
    }
}

const fonts = {
    heading: "'Ubuntu Mono'"
}

const colors = {
    glassTeal: '#88ccca',
    iris: '#5a4fcf',
    very_soft_iris: '#b8b3ea',
    dark_iris: '#0f0c2d',
    iris80: '#5a4fcf80',
    iris40: '#5a4fcf40',
    dark_iris80: '#0f0c2d80',
    dark_iris40: '#0f0c2d40'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme

