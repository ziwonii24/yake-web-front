import React from 'react'
import { Route, Switch } from 'react-router'

import NavBar from '../components/navbar/NavBar'
import MainPage from '../pages/MainPage'
import ItemDetailPage from '../pages/ItemDetailPage'

const routes = (
    <>
    <NavBar />
    <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/detail/:id" component={ItemDetailPage} /> */}
    </Switch>
    </>
)

export default routes