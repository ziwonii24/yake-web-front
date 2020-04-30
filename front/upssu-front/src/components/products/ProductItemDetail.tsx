import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'

import CircularProgress from '@material-ui/core/CircularProgress'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';

import './style/ProductItemDetail.scss'

import { getToken } from '../../lib/authentication'
import { ItemIdInterface, PrdItemDetailInterface } from './interface/ProductItem.interface'

dotenv.config()

const init: PrdItemDetailInterface = {
    id: '',
    displayName: '',
    averageRating: '',
    imgurl: '',
    brandName: '',
    description: '',
    ingredients: '',
    retailPrice: '',
    supplementFacts: '',
    suggestedUse: '',
    warnings: ''
}

const ProductItemDetail: FunctionComponent<ItemIdInterface> = ({id}: ItemIdInterface) => {

    const SERVER_IP = process.env.REACT_APP_SERVER_IP

    const [ loading, setLoading ] = useState<Boolean>(true)
    const [ item, setItem ] = useState<PrdItemDetailInterface>(init)
    const [ src, setSrc ] = useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const token = getToken()
                let response: any;

                if(!token) {
                    response = await axios.get(`${SERVER_IP}/product/${id}`)
                } else {
                    response = await axios.get(
                        `${SERVER_IP}/auth/product/${id}`,
                        { 
                            headers: { 
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            }
                        }
                    )
                }

                setItem(response.data)
                setSrc(`http://52.78.166.109${response.data.imgurl}`)

            } catch(e) {
                console.log(e)
            }
            
            setLoading(false)
        }
        
        fetchData()

    }, [])

    const handleErrorImg = () => {
        setSrc('http://placehold.it/600/ffffff?text=image')
    }

    if(loading) {
        return (
            <div className='loading-template'>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div className='detail-template'>
            <div className='detail-img-box'>
                <img src={src} onError={handleErrorImg} alt='img' />
            </div>
            <div className='detail-desc-box'>
                <div className='desc-title-box'>
                    {item.displayName}
                </div>
                <div className='desc-table-box'>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell className='td-title'>제조사</TableCell>
                                <TableCell>{item.brandName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>가격</TableCell>
                                <TableCell>{item.retailPrice}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>평점</TableCell>
                                <TableCell>{item.averageRating}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>재료</TableCell>
                                <TableCell><div dangerouslySetInnerHTML ={ {__html: item.ingredients}}></div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>주의사항</TableCell>
                                <TableCell><div dangerouslySetInnerHTML ={ {__html: item.warnings}}></div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>설명</TableCell>
                                <TableCell><div dangerouslySetInnerHTML ={ {__html: item.description}}></div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>섭취방법</TableCell>
                                <TableCell><div dangerouslySetInnerHTML ={ {__html: item.suggestedUse}}></div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='td-title'>영양 성분 정보</TableCell>
                                <TableCell><div dangerouslySetInnerHTML ={ {__html: item.supplementFacts}}></div></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductItemDetail