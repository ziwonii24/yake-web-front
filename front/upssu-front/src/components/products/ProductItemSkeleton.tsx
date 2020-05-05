import React, { FunctionComponent } from 'react'

import Skeleton from '@material-ui/lab/Skeleton'

import './style/ProductList.scss'
import './style/ProductItem.scss'

interface Props {
    key: number
}

const ProductItemSkeleton: FunctionComponent<Props> = ({key}: Props) => {
    return (
        <div className=''>
            <Skeleton animation="wave" variant="rect" width="100%" height="80%" />
            <Skeleton animation="wave" width="100%" height="10%" />
            <Skeleton animation="wave" width="50%" height="10%" />
        </div>
    )
}

export default ProductItemSkeleton