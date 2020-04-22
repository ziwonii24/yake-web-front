import React, { FunctionComponent } from 'react'

import Skeleton from '@material-ui/lab/Skeleton'

import './style/ProductItem.scss'

interface Props {
    key: number
    col: string
}

const ProductItemSkeleton: FunctionComponent<Props> = ({col}: Props) => {
    return (
        <div className={col === 'main' ? 'prdItem-main-lg' : 'prdItem-list-lg'}>
            <Skeleton animation="wave" variant="rect" width="100%" height="80%" />
            <Skeleton animation="wave" width="100%" height="10%" />
            <Skeleton animation="wave" width="50%" height="10%" />
        </div>
    )
}

export default ProductItemSkeleton