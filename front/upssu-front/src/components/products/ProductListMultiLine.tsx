import React, { FunctionComponent, useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import Pagination from '@material-ui/lab/Pagination'
import { CircularProgress, Grid } from '@material-ui/core'

import './style/ProductList.scss'

import { getToken } from '../../lib/authentication'
import { MultiLineListTypeInterface, PrdItemInterface } from './interface/ProductItem.interface'

import ProductItem from './ProductItem'

dotenv.config()

const init: PrdItemInterface = {
    id: '',
    imgUrl: '',
    title: '',
    score: ''
}

const ProductListMultiLine: FunctionComponent<MultiLineListTypeInterface> = (props: MultiLineListTypeInterface) => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const { type, keyword, tab, page } = props
    
    const [ loading, setLoading ] = useState<Boolean>(true)
    const [ itemList, setItemList ] = useState<PrdItemInterface[]>([init])
    const [ totalPage, setTotalPage ] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const token = getToken()
                let response: any;

                // 일반 검색
                if(type === 'search' && tab === 'a') {
                    console.log('token', token)
                    console.log(!token ? '토큰 없어' : '토큰있어')
                    console.log(!page ? '페이지 없어' : '페이지 있어')

                    if(!token) {
                        if(!page) {
                            response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}`)
                        } else {
                            response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}&page=${page-1}`)
                        }
                    } else {
                        if(!page) {
                            response = await axios.get(
                                `${SERVER_IP}:8088/auth/search/elastic?keyword=${keyword}`,
                                { 
                                    headers: { 
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${token}`
                                    }
                                }
                            )
                        } else {
                            response = await axios.get(
                                `${SERVER_IP}/auth/search/elastic?keyword=${keyword}&page=${page-1}`,
                                { 
                                    headers: { 
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${token}`
                                    }
                                }
                            )
                        }
                    }

                    setItemList(response.data.products)
                }
                // 스마트 검색
                else if(type === 'search' && tab === 'b') {
                    response = await axios.get(`http://52.78.166.109:9000/deepsearch?keyword=${keyword}&page=${page || 1}`)

                    setItemList(response.data.result)
                }
                
                setTotalPage(response.data.totalPage)
                
            } catch(e) {
                console.log(e)
            }
            
            setLoading(false)
        }

        fetchData()

    }, [])

    if(loading) {
        return (
            <div className='loading-template'>
                <CircularProgress />
            </div>
        )
    }

    const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
        localStorage.setItem(tab, value.toString())

        window.location.href = `/search?keyword=${keyword}&tab=${tab}&page=${value}`
    }

    return (
        <div className='prdList-multi-template'>
            <Grid container spacing={5}>
                { itemList.map(item => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                        <ProductItem id={item.id} imgUrl={item.imgUrl} title={item.title} score={item.score} />
                    </Grid>
                ))}
            </Grid>

            <Pagination className='pagination' count={totalPage} page={page || 1} onChange={handleChangePage} />
        </div>
    )
}

export default ProductListMultiLine