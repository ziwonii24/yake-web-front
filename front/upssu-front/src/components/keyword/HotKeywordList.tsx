import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import Skeleton from '@material-ui/lab/Skeleton';

import '../../styles/scss/App.scss'
import './style/HotKeywordList.scss'

dotenv.config()

const HotKeywordList = () => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const [ keywordList, setKeywordList ] = useState<String[]>(['','','','',''])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                // const response = await axios.get(`${SERVER_IP}/search/elastic?keyword=${keyword}`)
                // console.log(response.data)
                // setKeywordList(response.data)
            } catch(e) {
                console.log(e)
            }
            
            setLoading(false)
        }
        
        fetchData()

    }, [])

    return (
        <div className='keyword-template'>
            <div className="main-title">핫키워드</div>
            <div className="keyword-box">
                { loading ?
                    keywordList.map(() => (
                        <div className="keyword-skeleton">
                            <Skeleton animation="wave" variant="circle" width="100%" height="100%" />
                        </div>
                    ))
                :
                    keywordList.map(() => (
                        <div className="keyword-item-box">
                            <div className='keyword-item'>
                                <a>keyword</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>  
    )
}

export default HotKeywordList