import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'

import CircularProgress from '@material-ui/core/CircularProgress'

import './style/ProductItemDetail.scss'

import { MultiLineListTypeInterface } from './interface/ProductItem.interface'

const ProductListMultiLine: FunctionComponent<MultiLineListTypeInterface> = (props: MultiLineListTypeInterface) => {

    const { type, keyword, tab, page } = props

    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                console.log(response.data)
                // setItem(response.data)
            } catch(e) {
                console.log(e)
            }
            
            // setLoading(false)
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
            type : {type}<br />
            keyword : {keyword}<br />
            tab : {tab}<br />
            page : {page}
        </div>
    )
}

export default ProductListMultiLine

// import React, { FunctionComponent, useState, useEffect, useCallback, ChangeEvent } from 'react'

// import './style/ProductList.scss'

// import Pagination from '@material-ui/lab/Pagination'

// import { PrdItemInterface } from './interface/ProductItem.interface'
// import ProductItemSkeleton from './ProductItemSkeleton'
// import usePromise from '../../hooks/usePromise'
// import axios from 'axios'
// import ProductItem from './ProductItem'

// const init: PrdItemInterface = {
//     id: -1,
//     name: '',
//     img: '',
//     price: '',
//     score: '',
//     maker: ''
// }

// interface QueryParams {
//     keyword: string
//     page: number
// }

// const ProductListMultiLine: FunctionComponent<QueryParams> = (props: QueryParams) => {

//     const { keyword, page } = props
    
//     const handleChange = (e: ChangeEvent<unknown>, value: number) => {
//         window.location.href = `/search?keyword=${keyword}&page=${value}`
//     }

//     // if(loading) {
//     //     return (          
//     //         <div className='prdList-template-lg'>
//     //             <div className="prdList-lg">
//     //                 {/* {dataList.map(() => (
//     //                     <ProductItemSkeleton col={'list'} />
//     //                 ))} */}
//     //             </div>
//     //         </div>  
//     //     )
//     // }

//     return (
//         <div className='prdList-template-lg'>            
//             {/* <div className="prdList-lg">
//                 로딩 끝 { dataList.length }
//                 {dataList.map(data => (
//                     <ProductItem data={data} col={'list'} />
//                 ))}
//             </div>
//             <div>
//                 <Pagination count={10} page={page} onChange={handleChange} />
//             </div> */}
//         </div>
//     )
// }

// export default ProductListMultiLine