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
            <div className='img-box' onClick={handleClickItem}>
                <img src={imgUrl} alt='img' />
            </div>
            <div className='title-box' onClick={handleClickItem}>
                {title}
            </div>
        </div>
    )
}

export default ProductItem