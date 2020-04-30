import React from 'react'
import { Route, Switch } from 'react-router'

import Header from '../components/header/Header'
import MainPage from '../pages/MainPage'
import SearchResultPage from '../pages/SearchResultPage'
import ItemDetailPage from '../pages/ItemDetailPage'
import LoginPage from '../pages/LoginPage'
import JoinPage from '../pages/JoinPage'
import Footer from '../components/footer/Footer'

const routes = (
    <>
    <Header />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchResultPage} />
        <Route exact path="/detail" component={ItemDetailPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/join" component={JoinPage} />
    </Switch>
    <Footer />
    </>
)

export default routes