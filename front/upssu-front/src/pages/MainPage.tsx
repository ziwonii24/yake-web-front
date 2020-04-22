import React from 'react'

import HotKeywordList from '../components/keyword/HotKeywordList'
import ProductListOneLine from '../components/products/ProductListOneLine'

const MainPage = () => {

    // user

    return (
        <div>
            <HotKeywordList />
            {/* user &&  */} <ProductListOneLine type={'rec'} />
            <ProductListOneLine type={'best'} />
            <ProductListOneLine type={'spec'} />
        </div>
    )
}

export default MainPage