import React from 'react'
import { Navbar } from '../componenets/ui/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../componenets/marvel/MarvelScreen'
import { HeroesScreen } from '../componenets/heroes/HeroesScreen'
import { DcScreen } from '../componenets/dc/DcScreen'
import { SearchScreen } from '../componenets/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar  />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroesScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
