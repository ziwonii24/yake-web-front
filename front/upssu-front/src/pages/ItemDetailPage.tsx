import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

import ProductItemDetail from '../components/products/ProductItemDetail'
import ProductListOneLine from '../components/products/ProductListOneLine'

interface PathParamsProps {
    id: string
}

const ItemDetailPage: FunctionComponent<RouteComponentProps<PathParamsProps>> = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const itemId = query.id

    return (
        <div>
            <ProductItemDetail id={itemId}/>
            <ProductListOneLine type={'rel'} />
        </div>
    )
}

export default ItemDetailPage