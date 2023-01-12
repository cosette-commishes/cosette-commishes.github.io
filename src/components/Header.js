import React from "react";
import { Col, Row, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '.././App.css';
import { connect } from "react-redux";
import { changeRoute } from "../actions";

const Header = () => {
    return(
        <div style={{"margin-top":"30px"}}>
            <Row>
                <Col></Col>
                <Col xs={8} className="main-img"></Col>
                <Col></Col>
            </Row>
            <Row style={{"margin-top":"20px"}}>
                <Col></Col>
                <Col xs={8} className="navbar">
                    <Row className="nav text-center">
                        <Col></Col>
                        <Col></Col>
                        <Col><Link to="/">Home</Link></Col>
                        <Col><Link to="/faq">FAQ</Link></Col>
                        <Col><Link to="/terms-of-service">TOS</Link></Col>
                        <Col><Link to="/tracking">Tracking</Link></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(Header);