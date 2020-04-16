import React, { FunctionComponent, useState, useEffect } from 'react'

import Skeleton from '@material-ui/lab/Skeleton';

import '../../styles/scss/App.scss'
import './style/ProductList.scss'
import './style/ProductItem.scss'

import PrdItemInterface from './interface/ProductItem.interface'

const init: PrdItemInterface = {
    id: -1,
    name: '',
    img: '',
    price: '',
    score: '',
    maker: ''
}

interface ListType {
    type: string
}

const ProductList: FunctionComponent<ListType> = (props: ListType) => {

    const { type } = props
    const title = type === 'rec' ? '추천 상품' : type === 'best' ? '인기 상품' : type === 'spec' ? '이 많이 찾은 상품' : '관련 상품'
    const [ prdList, setPrdList ] = useState<PrdItemInterface[]>([init, init, init, init])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        // api call
        // setPrdList
        // api end -> setLoading(false)
    })

    if(loading) {
        return (          
            <div className={type === 'rec' ? "recommand-template" : ''}>
                <div className="main-title">{type === 'spec' && '20대 여성'}{title}</div>
                <div className="prdList-lg">
                    {prdList.map(() => (
                        <div className="prdItem-lg">
                            <Skeleton animation="wave" variant="rect" width="100%" height="80%" />
                            <Skeleton animation="wave" width="100%" height="10%" />
                            <Skeleton animation="wave" width="50%" height="10%" />
                        </div>
                    ))}
                </div>
            </div>  
        )
    }

    return (
        <div>{title}</div>
    )
}

export default ProductList