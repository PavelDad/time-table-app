import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {EditPage} from "./pages/EditPage";
import {ViewPage} from "./pages/ViewPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAutenticated => {
    if (isAutenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <EditPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <ViewPage/>
            </Route>
            <Route path="/login" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}