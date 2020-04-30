import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import '../../styles/scss/App.scss'
import './style/ProductList.scss'

import { getToken, decode } from '../../lib/authentication'
import { OneLineListTypeInterface, PrdItemInterface, SpecInterface } from './interface/ProductItem.interface'

import ProductItemSkeleton from './ProductItemSkeleton'
import ProductItem from './ProductItem'

dotenv.config()

const init: PrdItemInterface = {
    id: '',
    imgUrl: '',
    title: '',
    score: '',
    averageRating: 0,
    totalRatingCount: 0
}

const getSpecObject = (): SpecInterface => {
    const token = getToken()
    if(token) {
        const tokenDecoded = decode(token)
        return (
            {
                age: tokenDecoded.identity.user_birth_year,
                gender: tokenDecoded.identity.user_gender
            }
        )
    }

    // random
    const curYear = new Date().getFullYear()
    const rAge = curYear - Math.floor(Math.random() * 100)
    const rGenderIdx = Math.floor(Math.random() * 2)
    const rGender = ['male', 'female']

    return (
        {
            age: rAge.toString(),
            gender: rGender[rGenderIdx]
        }
    )
}

const getSpecTitle = (obj: SpecInterface): string => {
    const age = Number(obj.age)
    const curYear = new Date().getFullYear()
    const calAge = Math.floor((curYear - age + 1) / 10) * 10
    
    const ageStr = (calAge < 20) ? '20대 이하' : (calAge > 60) ? '60대 이상' : calAge + '대'
    
    const genderStr = (obj.gender === 'male') ? '남성' : '여성'

    return `${ageStr} ${genderStr}`
}

const ProductListOneLine: FunctionComponent<OneLineListTypeInterface> = ({type, id}: OneLineListTypeInterface) => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const title = type === 'rec' ? '추천 상품' : type === 'best' ? '인기 상품' : type === 'spec' ? '이 많이 찾은 상품' : '관련 상품'

    const specObject: SpecInterface = getSpecObject()

    const specTitle = (type === 'spec') ? getSpecTitle(specObject) : ''

    const [ itemList, setItemList ] = useState<PrdItemInterface[]>([])
    const [ loading, setLoading ] = useState<Boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const token = getToken()
                let response: any;

                if(type === 'rec') {
                    if(token) {
                        const tokenDecoded = decode(token)
                        response = await axios.get(`http://52.78.166.109:9000/recommend/related?user_id=${tokenDecoded.identity.user_id}`)
                        setItemList(response.data.result)
                    }

                } else if(type === 'best') {
                    response = await axios.get(`${SERVER_IP}/products?limit=4&page=0`)

                    // console.log('인기 결과', response.data.result)
                    setItemList(response.data.result)

                } else if(type === 'spec') {
                    if(!token) {
                        response = await axios.post(
                            `${SERVER_IP}/products/recommendbyage`, 
                            {
                                user_birth_year: specObject.age,
                                user_gender: specObject.gender
                            }
                        )
                    } else {
                        response = await axios.get(
                            `${SERVER_IP}/auth/products/recommendbyage`,
                            { 
                                headers: { 
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${token}`
                                }
                            }
                        )
                    }

                    setItemList(response.data.result)

                } else if(type === 'rel') {
                    response = await axios.get(`${SERVER_IP}/relation/${id}`)
                    console.log(response.data.related_product_list)
                    // setItemList(response.data.related_product_list)
                }
                
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
                    {type === 'spec' && specTitle}{title}
                </div>
            </div>
            <div className='prdList-one-list'>
                { loading ?
                    [1,2,3,4].map((data, idx) => (
                        <ProductItemSkeleton key={idx} col={'main'} />
                    ))
                :
                    itemList.map(item => (
                        <div className='prdList-one-item-box' key={item.id}>
                            <ProductItem 
                                id={item.id} 
                                imgUrl={item.imgUrl} 
                                title={item.title} 
                                score={item.score} 
                                averageRating={item.averageRating}
                                totalRatingCount={item.totalRatingCount}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductListOneLine