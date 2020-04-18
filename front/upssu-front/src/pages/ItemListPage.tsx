import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
    type: string
}

const ItemListPage: FunctionComponent<RouteComponentProps<MatchParams>> = ({ match }) => {

    const listType = match.params.type || 'best'

    return (
        <div>Item List Page { listType } </div>
    )
}

export default ItemListPage