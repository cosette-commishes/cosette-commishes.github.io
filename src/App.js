import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import Home from "./components/Home";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import OrderTracking from "./components/OrderTracking";
import Tos from "./components/Tos";

import './App.css';
import NavHeader from "./components/NavHeader";
import { connect } from "react-redux";
import { changeRoute } from "./actions";
import FloatingButton from "./components/FloatingButton";
import PageNotFound from "./components/PageNotFound";

class App extends React.Component {

    compo

    componentDidMount() {
        const path = (window.location.pathname).split('/').slice(1).join('/');
        this.props.changeRoute("/" + path);
    }

    isValidPath(path) {
        return ( path === null ||
            path === "/" ||
            path === "/info-and-faq" ||
            path === "/pricing" ||
            path === "/terms-of-service" ||
            path === "/order-tracking") ? true : false;
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Route path="/" exact component={Home} />
                    {this.props.route === "/" || !this.isValidPath(this.props.route) ? null : <NavHeader />}
                    <Route path="/info-and-faq" exact component={Faq} />
                    <Route path="/pricing" exact component={Pricing} />
                    <Route path="/terms-of-service" exact component={Tos} />
                    <Route path="/order-tracking" exact component={OrderTracking} />
                    <Route path="/page-not-found" exact component={PageNotFound} />
                    {this.isValidPath(this.props.route) ? null : <Redirect to='/page-not-found' />}
                </BrowserRouter>
                <FloatingButton />
            </>
        );
    }
}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(App);