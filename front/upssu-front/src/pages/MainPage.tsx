import React from 'react'

import InfoCarousel from '../components/carousel/InfoCarousel'
import HotKeywordList from '../components/keyword/HotKeywordList'
import ProductList from '../components/products/ProductList'

const MainPage = () => {

    // user

    return (
        <div style={{ marginTop: 90 }}>
            <InfoCarousel />
            <HotKeywordList />
            {/* user &&  */} <ProductList type={'rec'} />
            <ProductList type={'best'} />
            <ProductList type={'spec'} />
        </div>
    )
}

export default MainPage