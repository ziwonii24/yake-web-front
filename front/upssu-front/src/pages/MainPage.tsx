import React from 'react'

import InfoCarousel from '../components/carousel/InfoCarousel'
import HotKeywordList from '../components/keyword/HotKeywordList'
import RecommendPrd from '../components/products/RecommendPrd'
import BestPrd from '../components/products/BestPrd'
import SpecificPrd from '../components/products/SpecificPrd'

const MainPage = () => {

    // user

    return (
        <div>
            <InfoCarousel />
            <HotKeywordList />
            {/* user &&  */} <RecommendPrd />
            <BestPrd />
            <SpecificPrd />
        </div>
    )
}

export default MainPage