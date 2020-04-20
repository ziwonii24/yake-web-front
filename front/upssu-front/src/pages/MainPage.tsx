import React from 'react'

import InfoCarousel from '../components/carousel/InfoCarousel'
import HotKeywordList from '../components/keyword/HotKeywordList'
import ProductListOneLine from '../components/products/ProductListOneLine'

const MainPage = () => {

    // user

    return (
        <div>
            {/* <InfoCarousel /> */}
            <HotKeywordList />
            {/* user &&  */} <ProductListOneLine type={'rec'} />
            <ProductListOneLine type={'best'} />
            <ProductListOneLine type={'spec'} />
        </div>
    )
}

export default MainPage