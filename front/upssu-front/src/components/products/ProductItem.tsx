import React, { FunctionComponent } from 'react'

import './style/ProductItem.scss'

import { ItemInterface } from './interface/ProductItem.interface'

const ProductItem: FunctionComponent<ItemInterface> = (props: ItemInterface) => {

    const { data, col } = props

    const handleClickItem = () => {
        window.location.href = `/detail?id=${data.id}`
    }

    return (
        <div className={col === 'main' ? 'prdItem-main-lg' : 'prdItem-list-lg'}>
            <div className='img-box' onClick={handleClickItem}>
                {/* <img src={data.thumbnailUrl} alt='img' /> */}
            </div>
            <div className='title-box' onClick={handleClickItem}>
                {data.title}
            </div>
        </div>
    )
}

export default ProductItem