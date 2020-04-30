import React, { FunctionComponent, useState } from 'react'

import { TrendingUp } from '@material-ui/icons'
import { Chip } from "@material-ui/core";
import { Rating } from '@material-ui/lab'

import './style/ProductItem.scss'

import { PrdItemInterface } from './interface/ProductItem.interface'

const ProductItem: FunctionComponent<PrdItemInterface> = (props: PrdItemInterface) => {

    const { id, imgUrl, title, score, averageRating, totalRatingCount } = props

    const [ src, setSrc ] = useState<string>(imgUrl)

    const handleClickItem = () => {
        window.location.href = `/detail?id=${id}`
    }

    const handleErrorImg = () => {
        setSrc('http://placehold.it/600/ffffff?text=image')
    }

    return (
        <div>
            <div className='img-box' onClick={handleClickItem}>
                <img src={src} onError={handleErrorImg} alt='img' />
            </div>
            <div className='title-box' onClick={handleClickItem}>
                {title}
            </div>
            <div className='rating-box'>
            { averageRating &&
                <Rating name="half-rating-read" defaultValue={averageRating} precision={0.1} size="small" readOnly />
            }
            { totalRatingCount &&
                <p>({totalRatingCount})</p>
            }
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