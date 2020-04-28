import React, { FunctionComponent } from 'react'

import './style/ProductItem.scss'

import { PrdItemInterface } from './interface/ProductItem.interface'

const ProductItem: FunctionComponent<PrdItemInterface> = (props: PrdItemInterface) => {

    const { id, imgUrl, title } = props

    const handleClickItem = () => {
        window.location.href = `/detail?id=${id}`
    }

    return (
        <div>
            <div onClick={handleClickItem}>
                <img src={imgUrl} alt='img' />
            </div>
            <div onClick={handleClickItem}>
                {title}
            </div>
        </div>
    )
}

export default ProductItem