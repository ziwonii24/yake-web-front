import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'

import CircularProgress from '@material-ui/core/CircularProgress'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import './style/ProductItemDetail.scss'

import { DataItemInterface, ItemIdInterface } from './interface/ProductItem.interface'

const init = {
    userId: -1,
    id: -1,
    title: '',
    body: ''
}

const ProductItemDetail: FunctionComponent<ItemIdInterface> = ({id}: ItemIdInterface) => {

    const [ item, setItem ] = useState<DataItemInterface>(init)
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                console.log(response.data)
                setItem(response.data)
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
        <div className='detail-template'>
            <div className='detail-img-box'>

            </div>
            <div className='detail-desc-box'>
                <div className='desc-title-box'>
                    {item.title}
                </div>
                <div className='desc-table-box'>
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow>
                                <TableCell>abc</TableCell>
                                <TableCell>abcabcabcabcabcabc</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>abc</TableCell>
                                <TableCell>abcabcabcabcabcabc</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>abc</TableCell>
                                <TableCell>abcabcabcabcabcabc</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>abc</TableCell>
                                <TableCell>abcabcabcabcabcabc</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductItemDetail