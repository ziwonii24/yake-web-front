import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import qs from 'qs'
import Menu from '../components/menu/Menu'

interface MatchParams {
    mainType: string
    subType: string
}

// [url] /list/symptoms?sub=eye
// [mainType] symptoms, categories, rec, best, spec
// [subType]
// symptoms : all, eye, brain
// categories : all, vitamin, omega
const ItemListPage: FunctionComponent<RouteComponentProps<MatchParams>> = ({ match, location }) => {

    const mainType = match.params.mainType || 'best'
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })

    const subType = query.sub

    return (
        <div>
            <Menu mainType={mainType} subType={subType} />

            리스트

            페이지
        </div>
    )
}

export default ItemListPage