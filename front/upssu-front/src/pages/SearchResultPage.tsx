import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

interface PathParamsProps {
    keyword: string
}

const SearchResultPage: FunctionComponent<RouteComponentProps<PathParamsProps>> = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const keyword = query.keyword

    return (
        <div>SearchResultPage { keyword } </div>
    )
}

export default SearchResultPage