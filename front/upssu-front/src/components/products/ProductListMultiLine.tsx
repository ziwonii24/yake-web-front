import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'

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

interface QueryParams {
    keyword: string
    page: number
}

const ProductListMultiLine: FunctionComponent<QueryParams> = (props: QueryParams) => {

    const { keyword, page } = props
    const [ prdList, setPrdList ] = useState<PrdItemInterface[]>([init, init, init])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        // api call
        // setPrdList
        // api end -> setLoading(false)
    })

    // const handleClickLink = useCallback(e => {
    //     window.location.href = `/list/${type}`
    // }, [])

    console.log('list rendering again')

    if(loading) {
        return (          
            <div className='prdList-template-lg'>
                <div className="prdList-lg">
                    {prdList.map(() => (
                        <ProductItemSkeleton />
                    ))}
                </div>
            </div>  
        )
    }

    return (
        <div></div>
    )
}

export default ProductListMultiLine