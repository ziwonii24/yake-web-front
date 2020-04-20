import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton'

import './style/ProductItem.scss'

const ProductItemSkeleton = () => {
    return (
        <div className="prdItem-lg">
            <Skeleton animation="wave" variant="rect" width="100%" height="80%" />
            <Skeleton animation="wave" width="100%" height="10%" />
            <Skeleton animation="wave" width="50%" height="10%" />
        </div>
    )
}

export default ProductItemSkeleton