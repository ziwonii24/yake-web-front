import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

import '../styles/scss/App.scss'

import ProductListMultiLine from '../components/products/ProductListMultiLine'

interface PathParamsProps {
    keyword: string
    page: string
}

const SearchResultPage: FunctionComponent<RouteComponentProps<PathParamsProps>> = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const keyword = query.keyword
    const page = Number(query.page) || 1

    return (
        <div>
            <div className='search-title'>
                {keyword}에 대한 검색 결과
            </div>
            
            <ProductListMultiLine keyword={keyword} page={page} />
        </div>
    )
}

export default SearchResultPage