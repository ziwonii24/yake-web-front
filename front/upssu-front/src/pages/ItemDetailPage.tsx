import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
    id: string
}

const ItemDetailPage: FunctionComponent<RouteComponentProps<MatchParams>> = ({ match }) => {

    const itemId = match.params.id

    return (
        <div>Item Detail Page { itemId } </div>
    )
}

export default ItemDetailPage