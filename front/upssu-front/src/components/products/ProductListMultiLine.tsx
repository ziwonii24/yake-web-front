import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import { CircularProgress, Grid, Paper } from '@material-ui/core'

import './style/ProductItemDetail.scss'

import { getToken } from '../../lib/authentication'
import { MultiLineListTypeInterface, PrdItemInterface } from './interface/ProductItem.interface'

import ProductItem from './ProductItem'

dotenv.config()

const init: PrdItemInterface = {
    id: '',
    imgUrl: '',
    title: ''
}

const ProductListMultiLine: FunctionComponent<MultiLineListTypeInterface> = (props: MultiLineListTypeInterface) => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const { type, keyword, tab, page } = props
    
    const [ loading, setLoading ] = useState<Boolean>(true)
    const [ itemList, setItemList ] = useState<PrdItemInterface[]>([init])

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
                    response = !token ? 
                        await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}&page=${page-1}`)
                        : await axios.get(
                            `${SERVER_IP}/auth/search/elastic?keyword=${keyword}&page=${page-1}`,
                            { 
                                headers: { 
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${token}`
                                }
                            }
                        )
                }
                // 스마트 검색
                else if(type === 'search' && tab === 'b') {

                }
                
                console.log(response.data)
                setItemList(response.data)
                
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

    return (
        <div>
            <Grid container spacing={3}>
                { itemList.map(item => (
                    <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
                    <Paper>
                        <ProductItem id={item.id} imgUrl={item.imgUrl} title={item.title} />
                    </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductListMultiLine