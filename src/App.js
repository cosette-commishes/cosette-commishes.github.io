import React from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./components/Home";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import OrderTracking from "./components/OrderTracking";
import Tos from "./components/Tos";

import './App.css';
import NavHeader from "./components/NavHeader";
import FloatingLogo from "./components/FloatingLogo";

const App = () => {
    return(
        <div> 
            <BrowserRouter basename="/cosette-commishes">
                <Route path="/" exact component={Home} />
                <NavHeader />
                <Route path="/*" exact component={FloatingLogo} />
                <Route path="/info-and-faq" exact component={Faq} />
                <Route path="/pricing" exact component={Pricing} />
                <Route path="/terms-of-service" exact component={Tos} />
                <Route path="/order-tracking" exact component={OrderTracking} />
            </BrowserRouter>
        </div>
    );
}

export default App;