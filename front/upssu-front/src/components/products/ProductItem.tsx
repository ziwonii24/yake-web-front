import React, { FunctionComponent } from 'react'

import { TrendingUp } from '@material-ui/icons'
import { Chip } from "@material-ui/core";

import './style/ProductItem.scss'

import { PrdItemInterface } from './interface/ProductItem.interface'

const ProductItem: FunctionComponent<PrdItemInterface> = (props: PrdItemInterface) => {

    const { id, imgUrl, title, score } = props

    const handleClickItem = () => {
        window.location.href = `/detail?id=${id}`
    }

    return (
        <div>
            <div className='img-box' onClick={handleClickItem}>
                <img src={imgUrl} alt='img' />
            </div>
            <div className='title-box' onClick={handleClickItem}>
                {title}
            </div>
            { score && 
                <div className='score-box'>                    
                    <Chip
                        icon={<TrendingUp />}
                        label={ (Number(score) * 100).toFixed(1) + '% 일치' }
                        variant="outlined"
                    />
                </div>
            }
        </div>
    )
}

export default ProductItem