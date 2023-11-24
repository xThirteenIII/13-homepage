import Link from 'next/link'
import { Text, useColorMode, useColorModeValue} from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
display: inline-flex;
align-items: center;
line-height: 20px;
padding: 10px;
&:hover {
    transform: scaleX(-1);
}
`

const Logo = () => {

    return (
        <Link href="/">
            <LogoBox style={{color:useColorModeValue("#b8b3ea", "white")}}>
                13
            </LogoBox>
        </Link>
    )
}

export default Logo

