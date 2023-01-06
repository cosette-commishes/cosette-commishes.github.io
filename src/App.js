import React from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Home from "./components/Home";
import Faq from "./components/Faq";

import './App.css';

const App = () => {
    return(
        <Container>
            <BrowserRouter basename="/cosette-commishes">
                <div>  
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/faq" exact component={Faq} />
                </div>
            </BrowserRouter>
        </Container>
    );
}

export default App;