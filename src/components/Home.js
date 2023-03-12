import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions";

class Home extends React.Component {

    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
        window.scrollTo(0, 0);
    }

    render() {
        return (
            // <div className="main-container d-flex flex-column justify-content-center align-items-center">
            <Container className="p-5">
                <Row className="main-child-container">
                    <Col xs={12} xl={6} className="my-auto d-flex justify-content-center">
                        <div className="img-container" />
                    </Col>
                    <Col xl={6} className="main-col-center">
                        <Row className="welcome-row">
                            <div className="text-center">
                                <div className="logo"></div>
                                <p className="paraph-home">Welcome, thank you for choosing me</p>
                                <p className="paraph-home">as your artist this time ♥</p>
                            </div>
                        </Row>
                        <Row className="buttons-row d-flex justify-content-center">
                            <Link to={"/pricing"} className="button main-buttons">
                                PRICE LIST
                            </Link>
                            <Link to={"/terms-of-service"} className="button main-buttons">
                                T.O.S
                            </Link>
                            <Link to={"/info-and-faq"} className="button main-buttons">
                                INFO AND FAQ
                            </Link>
                            <Link to={"/order-tracking"} className="button main-buttons">
                                ORDER TRACKING - QUEUE
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </Container>
            // </div>
        );
    }

}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(Home);