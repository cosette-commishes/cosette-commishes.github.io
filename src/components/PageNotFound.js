import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { changeRoute } from "../actions";
import Footer from "./Footer";

class FloatingLogo extends React.Component {
    render() {
        return(
            <Container className="p-5">
                <Row className="main-child-container align-items-center">
                    <Col xs={12} xl={6} className="my-auto d-flex justify-content-center">
                        <div className="img-container" />
                    </Col>
                    <Col xl={6} className="main-col-center">
                        <Row className="welcome-row">
                            <div className="text-center">
                                <div className="logo"></div>
                                <p className="not-found-text" style={{marginBottom: '-10px'}}>OOOPS!</p>
                                <p className="not-found-text">PAGE NOT FOUND.</p>
                                <p className="not-found-descr">It seems like the address entered does not belong to any valid page. Make sure you are trying to access the correct page.</p>
                            </div>
                        </Row>
                        <Row className="buttons-row d-flex justify-content-center">
                            <Link to={"/"} className="button main-buttons">
                                HOME SCREEN
                            </Link>
                        </Row>
                    </Col>
                </Row>
                <Row className="text-center mt-5">
                    <Col xs={12}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(FloatingLogo);