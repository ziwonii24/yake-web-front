import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import ProductListMultiLine from '../components/products/ProductListMultiLine'

interface PathParamsProps {
    keyword: string
}

const SearchResultPage: FunctionComponent<RouteComponentProps<PathParamsProps>> = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const keyword = query.keyword

    return (
        <div>
            <div>
                {keyword}에 대한 검색 결과
            </div>
            
            <ProductListMultiLine keyword={keyword} page={'1'} />
            
            <div>
                pagination
            </div>
        </div>
    )
}

export default SearchResultPage