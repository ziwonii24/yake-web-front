import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Params {
    mainType: string
}

const ItemListPage: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    const mainType = match.params.mainType || 'best'    // rec, best, spec, rel

    return (
        <div>
            리스트
            페이지
        </div>
    )
}

export default ItemListPage