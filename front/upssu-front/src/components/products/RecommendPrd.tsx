import React, { useState, useEffect } from 'react'

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

const RecommendPrd = () => {

    const [ prdList, setPrdList ] = useState<PrdItemInterface[]>([init, init, init, init])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        // api call
        // setPrdList
        // api end -> setLoading(false)
    })

    if(loading) {
        return (          
            <div className="recommand-template">
                <div className="main-title">추천 상품</div>
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
        <div>Recommend Products</div>
    )
}

export default RecommendPrd