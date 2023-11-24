import Link from 'next/link'
import { Text, useColorMode, useColorModeValue} from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
display: inline-flex;
align-items: center;
line-height: 20px;
padding: 10px;
`

const Logo = () => {

    return (
        <Link href="/">
            <LogoBox>
                13
            </LogoBox>
        </Link>
    )
}

export default Logo

