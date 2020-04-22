import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import '../../styles/scss/App.scss'
import './style/ProductList.scss'

import { PrdItemInterface, DataItemInterface } from './interface/ProductItem.interface'
import ProductItemSkeleton from './ProductItemSkeleton'
import ProductItem from './ProductItem'

// const init: PrdItemInterface = {
//     id: -1,
//     name: '',
//     img: '',
//     price: '',
//     score: '',
//     maker: ''
// }

// const init: DataItemInterface = {
//     albumId: -1,
//     id: -1,
//     title: '',
//     url: '',
//     thumbnailUrl: ''
// }

const init = {
    userId: -1,
    id: -1,
    title: '',
    body: ''
}

interface ListType {
    type: string
}

const ProductListOneLine: FunctionComponent<ListType> = (props: ListType) => {

    const { type } = props
    const title = type === 'rec' ? '추천 상품' : type === 'best' ? '인기 상품' : type === 'spec' ? '이 많이 찾은 상품' : '관련 상품'
    const [ prdList, setPrdList ] = useState<DataItemInterface[]>([init, init, init, init])
    const [ loading, setLoading ] = useState<Boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')  // /photos
                console.log(response.data)
                setPrdList(response.data)
            } catch(e) {
                console.log(e)
            }
            
            setLoading(false)
        }
        
        fetchData()

    }, [])

    const handleClickLink = () => {
        window.location.href = `/list/${type}`
    }

    return (
        <div className={'prdList-template-lg ' + ((type === 'rec' || type === 'rel') && 'recommand-template')}>
            <div className="main-title">
                <div className='prdList-title-box' onClick={handleClickLink}>
                    {type === 'spec' && '20대 여성'}{title}
                    <ArrowForwardIosIcon className='arrowIcon' />
                </div>
            </div>
            <div className="prdList-lg">
                { loading ?
                    prdList.map((data, idx) => (
                        <ProductItemSkeleton key={idx} col={'main'} />
                    ))
                :
                    <>
                        <ProductItem data={prdList[0]} col={'main'} />
                        <ProductItem data={prdList[1]} col={'main'} />
                        <ProductItem data={prdList[2]} col={'main'} />
                        <ProductItem data={prdList[3]} col={'main'} />
                    </>
                }
            </div>
        </div>
    )
}

export default ProductListOneLine