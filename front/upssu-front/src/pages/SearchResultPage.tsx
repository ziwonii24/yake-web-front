import React, { FunctionComponent, useState, useEffect, useCallback, ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

import Pagination from '@material-ui/lab/Pagination'

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

    const handleChange = (e: ChangeEvent<unknown>, value: number) => {
        window.location.href = `/search?keyword=${keyword}&page=${value}`
    };

    return (
        <div>
            <div>
                {keyword}에 대한 검색 결과
            </div>
            
            <ProductListMultiLine keyword={keyword} page={page} />
            
            <div>
                <Pagination count={10} page={page} onChange={handleChange} />
            </div>
        </div>
    )
}

export default SearchResultPage