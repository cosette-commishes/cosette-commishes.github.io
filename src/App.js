import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import OrderTracking from "./components/OrderTracking";
import Tos from "./components/Tos";

import './App.css';
import NavHeader from "./components/NavHeader";
import { connect } from "react-redux";
import { changeRoute } from "./actions";

class App extends React.Component {

    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
    }

    render() {
        return (
            <>
                <BrowserRouter basename="/">
                    <Route path="/" exact component={Home} />
                    <>
                        {this.props.route === "/" ? null : <NavHeader />}
                        <Route path="/info-and-faq" exact component={Faq} />
                        <Route path="/pricing" exact component={Pricing} />
                        <Route path="/terms-of-service" exact component={Tos} />
                        <Route path="/order-tracking" exact component={OrderTracking} />
                    </>
                </BrowserRouter>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(App);