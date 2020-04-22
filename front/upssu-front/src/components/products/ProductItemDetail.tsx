import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'

import CircularProgress from '@material-ui/core/CircularProgress'

import { PrdItemInterface, DataItemInterface } from './interface/ProductItem.interface'

interface Props {
    id: string 
}

const init = {
    userId: -1,
    id: -1,
    title: '',
    body: ''
}

const ProductItemDetail: FunctionComponent<Props> = ({id}: Props) => {

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
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div>Product Item {item.title} </div>
    )
}

export default ProductItemDetail