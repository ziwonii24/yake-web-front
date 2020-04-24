import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'

import Pagination from '@material-ui/lab/Pagination'

import '../styles/scss/App.scss'

import ProductListMultiLine from '../components/products/ProductListMultiLine'

interface Params {
    type: string
    page: string
}

const ItemListPage: FunctionComponent<RouteComponentProps<Params>> = ({ location }) => {

    
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })
    
    const type = query.type || 'best'    // rec, best, spec, rel
    const page = Number(query.page) || 1

    const title = type === 'rec' ? '추천 상품' : type === 'best' ? '인기 상품' : type === 'spec' ? '이 많이 찾은 상품' : '관련 상품'

    return (
        <div>
            <div className='list-title'>
                {type === 'spec' && '20대 여성'}{title}
            </div>

            <ProductListMultiLine type={type} keyword={''} tab={''} page={page} />

            <Pagination count={10} page={page} />
        </div>
    )
}

export default ItemListPage