import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

import ProductItemDetail from '../components/products/ProductItemDetail'
import ProductListOneLine from '../components/products/ProductListOneLine'

interface Params {
    id: string
}

const ItemDetailPage: FunctionComponent<RouteComponentProps<Params>> = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const itemId = query.id

    return (
        <div>
            <ProductItemDetail id={itemId}/>
            <ProductListOneLine id={itemId} type={'rel'} />
        </div>
    )
}

export default ItemDetailPage