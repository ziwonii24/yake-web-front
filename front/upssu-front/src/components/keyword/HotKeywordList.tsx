import React, { useState, useEffect } from 'react'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton';

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
            <div className="keywordList-lg">
                {keywordList.map(() => (
                    <div className="keywordItem-lg">
                        <Skeleton animation="wave" variant="circle" width="100%" height="100%" />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>hot keyword list {keywordList.length} </div>
    )
}

export default HotKeywordList