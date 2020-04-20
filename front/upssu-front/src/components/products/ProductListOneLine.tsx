import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import '../../styles/scss/App.scss'
import './style/ProductList.scss'

import PrdItemInterface from './interface/ProductItem.interface'
import ProductItemSkeleton from './ProductItemSkeleton'

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

const ProductListOneLine: FunctionComponent<ListType> = (props: ListType) => {

    const { type } = props
    const title = type === 'rec' ? '추천 상품' : type === 'best' ? '인기 상품' : type === 'spec' ? '이 많이 찾은 상품' : '관련 상품'
    const [ prdList, setPrdList ] = useState<PrdItemInterface[]>([init, init, init, init])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        // api call
        // setPrdList
        // api end -> setLoading(false)
    })

    const handleClickLink = useCallback(e => {
        window.location.href = `/list/${type}`
    }, [])

    if(loading) {
        return (          
            <div className={'prdList-template-lg ' + (type === 'rec' && 'recommand-template')}>
                <div className="main-title">
                    <div className='prdList-title-box' onClick={handleClickLink}>
                        {type === 'spec' && '20대 여성'}{title}
                        <ArrowForwardIosIcon className='arrowIcon' />
                    </div>
                </div>
                <div className="prdList-lg">
                    {prdList.map(() => (
                        <ProductItemSkeleton />
                    ))}
                </div>
            </div>  
        )
    }

    return (
        <div>{title}</div>
    )
}

export default ProductListOneLine