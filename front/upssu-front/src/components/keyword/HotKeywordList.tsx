import React, { useState, useEffect } from 'react'

import Skeleton from '@material-ui/lab/Skeleton';

import '../../styles/scss/App.scss'
import './style/HotKeywordList.scss'
import './style/HotKeywordItem.scss'

const HotKeywordList = () => {

    const [ keywordList, setKeywordList ] = useState<String[]>(['','','','',''])
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        // api call
        // setKeywordList
        // api end -> setLoading(false)
    })

    if(loading) {
        return (          
            <div>
                <div className="main-title">핫키워드</div>
                <div className="keywordList-lg">
                    {keywordList.map(() => (
                        <div className="keywordItem-lg">
                            <Skeleton animation="wave" variant="circle" width="100%" height="100%" />
                        </div>
                    ))}
                </div>
            </div>  
        )
    }

    return (
        <div>hot keyword list {keywordList.length} </div>
    )
}

export default HotKeywordList