import React, { FunctionComponent } from 'react'

import './style/ProductItem.scss'

import { PrdItemInterface, DataItemInterface } from './interface/ProductItem.interface'

interface Props {
    data: DataItemInterface
    col: string
}

const ProductItem: FunctionComponent<Props> = (props: Props) => {

    const { data, col } = props

    const handleClickItem = () => {
        window.location.href = `/detail?id=${data.id}`
    }

    return (
        <div className={col === 'main' ? 'prdItem-main-lg' : 'prdItem-list-lg'}>
            <div className='img-box' onClick={handleClickItem}>
                {/* <img src={data.thumbnailUrl} alt='img' /> */}
            </div>
            <div onClick={handleClickItem}>{data.title}</div>
        </div>
    )
}

export default ProductItem