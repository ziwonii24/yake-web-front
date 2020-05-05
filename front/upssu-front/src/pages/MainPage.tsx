import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import { getToken } from '../lib/authentication'

import HotKeywordList from '../components/keyword/HotKeywordList'
import ProductListOneLine from '../components/products/ProductListOneLine'

dotenv.config()

const MainPage = () => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const [ isShowable, setShowable ] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = getToken()
                if(!token) {
                    setShowable(false)
                } else {
                    const response = await axios.get(
                        `${SERVER_IP}:8088/auth/searchcount`,
                        { 
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            }
                        }
                    )
            
                    setShowable(response.data.isPossible)
                }
        
            } catch(e) {
                console.log(e)
            }
        }
    
        fetchData()
    })

    return (
        <div>
            <HotKeywordList />
            { isShowable && <ProductListOneLine id={''} type={'rec'} /> }
            <ProductListOneLine id={''} type={'best'} />
            <ProductListOneLine id={''} type={'spec'} />
        </div>
    )
}

export default MainPage