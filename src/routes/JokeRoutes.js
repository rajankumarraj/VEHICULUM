import React from "react";

import { Route, Switch } from "react-router-dom";

// Pages

// Landing Pages

import JokesMainComponent from "../pages/JokesMainComponent/JokesMainComponent";
import JokeComponent from "../pages/JokeComponent/JokeComponent";


// Layout
import LandingLayout from "../layouts/ApplicationLayout";

const LandingRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            <Layout>
                <Component {...props}></Component>
            </Layout>
        )}
    ></Route>
);
const EnterpriseLandingRoutes = () => (
    <>
        <Switch>
            {/* Forgot Password Page route for Enterprise*/}
            <LandingRoute
                layout={LandingLayout}
                exact
                path="/"
                component={JokesMainComponent}
            />
            <LandingRoute
                layout={LandingLayout}
                path="/:jokeId"
                component={JokeComponent}
            />

        </Switch>
    </>
);

export default EnterpriseLandingRoutes;
