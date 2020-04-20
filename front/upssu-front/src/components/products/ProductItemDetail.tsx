import React, { FunctionComponent, useState, useEffect } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

interface Props {
    id: string 
}

const ProductItemDetail: FunctionComponent<Props> = ({id}: Props) => {

    // const [ item, setItem ] = useState
    const [ loading, setLoading ] = useState<Boolean>(true)

    useEffect(() => {
        // api call
        // setItem
        // api end -> setLoading(false)
    })

    if(loading) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div>Product Item {id} </div>
    )
}

export default ProductItemDetail