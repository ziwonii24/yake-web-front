import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

interface MatchParams {
    mainType: string
    subType: string
}

const ItemListPage: FunctionComponent<RouteComponentProps<MatchParams>> = ({ match, location }) => {

    const listMainType = match.params.mainType || 'best'
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const subType = query.sub

    return (
        <div>Item List Page { listMainType } { subType }</div>
    )
}

export default ItemListPage