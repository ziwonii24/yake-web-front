import React from 'react'
import { Route, Switch } from 'react-router'

import Header from '../components/header/Header'
import MainPage from '../pages/MainPage'
import ItemListPage from '../pages/ItemListPage'
import ItemDetailPage from '../pages/ItemDetailPage'

const routes = (
    <>
    <Header />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/list/:type?" component={ItemListPage} />
        {/* <Route exact path="/detail/:id" component={ItemDetailPage} /> */}
    </Switch>
    </>
)

export default routes