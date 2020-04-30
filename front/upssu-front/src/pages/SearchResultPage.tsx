import React, { FunctionComponent, ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

import { Tabs, Tab } from '@material-ui/core'

import '../styles/scss/App.scss'

import ProductListMultiLine from '../components/products/ProductListMultiLine'

interface Params {
    keyword: string
    tab: string
    page: string    
}

const SearchResultPage: FunctionComponent<RouteComponentProps<Params>> = ({ location }) => {

    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const keyword = query.keyword
    const tab = query.tab || 'a'
    const page = Number(query.page) // || 1

    localStorage.getItem('a') || localStorage.setItem('a', '1')
    localStorage.getItem('b') || localStorage.setItem('b', '1')

    const handleChangeTab = (e: ChangeEvent<{}>, newValue: number) => {
        const selectedTab = newValue === 0 ? 'a' : 'b'
        const savedPage = Number(localStorage.getItem(selectedTab))

        window.location.href = `/search?keyword=${keyword}&tab=${selectedTab}&page=${savedPage}`
    }

    return (
        <div>
            <div className='list-title'>
                {keyword}에 대한 검색 결과
            </div>

            <Tabs
                value={tab === 'a' ? 0 : 1}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="일반 검색" />
                <Tab label="스마트 검색" />
            </Tabs>       
            
            <ProductListMultiLine type={'search'} keyword={keyword} tab={tab} page={page} />
        </div>
    )
}

export default SearchResultPage