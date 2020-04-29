import React from 'react'

import { getToken } from '../lib/authentication'

import HotKeywordList from '../components/keyword/HotKeywordList'
import ProductListOneLine from '../components/products/ProductListOneLine'

const MainPage = () => {

    const token = getToken()

    return (
        <div>
            <HotKeywordList />
            { token && <ProductListOneLine type={'rec'} /> }
            <ProductListOneLine type={'best'} />
            <ProductListOneLine type={'spec'} />
        </div>
    )
}

export default MainPage