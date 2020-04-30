import React, { useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import { KeywordInterface } from './interface/KeywordItem.interface'

import Skeleton from '@material-ui/lab/Skeleton';

import '../../styles/scss/App.scss'
import './style/HotKeywordList.scss'

dotenv.config()

const init: KeywordInterface = {
    keyword : '',
    count : 0
}

const HotKeywordList = () => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const [ keywordList, setKeywordList ] = useState<KeywordInterface[]>([init])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get(`${SERVER_IP}/hotkeyword?page=1&limit=5`)
                setKeywordList(response.data.result)

            } catch(e) {
                console.log(e)
            }
            setLoading(false)
        }
        fetchData()

    }, [])

    const handleClickHotKeyword = (keyword: string) => {
        window.location.href = `/search?keyword=${keyword}`
    }

    return (
        <div className='keyword-template'>
            <div className="main-title">핫키워드</div>
            <div className="keyword-box">
                { loading ?
                    [1,2,3,4,5].map((idx) => (
                        <div className="keyword-skeleton" key={idx}>
                            <Skeleton animation="wave" variant="circle" width="100%" height="100%" />
                        </div>
                    ))
                :
                    keywordList.map((item, idx) => (
                        <div className="keyword-item-box" key={idx}>
                            <div className='keyword-item' onClick={() => handleClickHotKeyword(item.keyword)} >
                                <a>{item.keyword}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>  
    )
}

export default HotKeywordList