import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import '../../styles/scss/App.scss'
import './style/ProductList.scss'

import { OneLineListTypeInterface, PrdItemInterface } from './interface/ProductItem.interface'

import ProductItemSkeleton from './ProductItemSkeleton'
import ProductItem from './ProductItem'

dotenv.config()

const init: PrdItemInterface = {
    id: '',
    imgUrl: '',
    title: ''
}

const ProductListOneLine: FunctionComponent<OneLineListTypeInterface> = ({type}: OneLineListTypeInterface) => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const title = type === 'rec' ? '추천 상품' : type === 'best' ? '인기 상품' : type === 'spec' ? '이 많이 찾은 상품' : '관련 상품'
    const [ itemList, setItemList ] = useState<PrdItemInterface[]>([init, init, init, init])
    const [ loading, setLoading ] = useState<Boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                let response: any;

                if(type === 'rec') {
                    // response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}`)
                } else if(type === 'best') {
                    // response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}`)
                } else if(type === 'spec') {
                    // response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}`)
                } else if(type === 'rel') {
                    // response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}`)
                }

                // console.log(response.data)
                // setItemList(response.data)
            } catch(e) {
                console.log(e)
            }
            
            setLoading(false)
        }
        
        fetchData()

    }, [])

    return (
        <div className={'prdList-one-template ' + ((type === 'rec' || type === 'rel') && 'prdList-one-color-template')}>
            <div className="main-title">
                <div className='prdList-title-box'>
                    {type === 'spec' && '20대 여성'}{title}
                </div>
            </div>
            <div className='prdList-one-list'>
                { loading ?
                    itemList.map((data, idx) => (
                        <ProductItemSkeleton key={idx} col={'main'} />
                    ))
                :
                    itemList.map(item => (
                        <div className='prdList-one-item-box' key={item.id}>
                            <ProductItem id={'5ea1b53af8dbb203452480bc'} imgUrl={'https://s3.images-iherb.com/lab/lab11347/v/0.jpg'} title={'날씬한 몸, 고 단백 식사 대체 쉐이크, 딸기, 20 패킷, 2.78 온스 (79 g)'} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductListOneLine