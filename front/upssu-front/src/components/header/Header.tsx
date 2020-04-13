import React, { FunctionComponent } from 'react'

import useWindowSize from '../../hooks/useWindowSize'

import LargeHeader from './LargeHeader'
import SmallHeader from './SmallHeader'

const Header: FunctionComponent = () => {

    const { width } = useWindowSize()

    // 여기서 유저 정보를 가지고 있고
    // 이벤트 핸들러들 지정(로그아웃, 로그인, 등등)

    return (
        width > 768 ?
        <LargeHeader />
        : <SmallHeader />
    )
}

export default Header