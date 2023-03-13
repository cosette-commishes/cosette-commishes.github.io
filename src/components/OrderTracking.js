import React from "react";
import { connect } from "react-redux";
import { changeRoute, selectOrder } from "../actions";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import FloatingLogo from "./FloatingLogo";

class OrderTracking extends React.Component {
    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
        window.scrollTo(0, 0);
    }

    showTracker() {
        return (
            <Container>
                <Row className="text-center mb-3 tracking-info">
                    <Col xs={12} md={4} lg={6} className="d-flex justify-content-center mt-2 mb-3">
                        <div className="paint-icon" />
                    </Col>
                    <Col xs={12} md={2} className="text-start">Mariano Montenegro</Col>
                    <Col xs={12} md={2} className="text-start">Type Commission</Col>
                    <Col xs={12} md={2} className="text-start">Quantity</Col>
                </Row>
                <Row className="gx-0">
                    <Col className="text-muted">Order Status</Col>
                    <Col xs={12}>
                        <ProgressBar animated now={100} />
                        <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Sketch</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Lineart</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Color</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Done</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <Container className="main-child-container main-child-container-tracking">
                <Row className="justify-content-center">
                    <Col lg={4} className="text-center">
                        <div className="top-button">
                            ORDER TRACKING
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={12} className="overflow-auto tracking-col">
                        <button className="accordion"
                            onClick={() => { this.props.selectOrder(1) }} >
                            Section 1
                        </button>
                        <div className="panel"
                            style={this.props.order === 1 ? { display: 'block' } : { display: 'none' }}
                        >
                            {this.showTracker()}
                        </div>
                        <button class="accordion"
                            onClick={() => { this.props.selectOrder(2) }}
                        >
                            Section 1</button>
                        <div class="panel" style={this.props.order === 2 ? { display: 'block' } : { display: 'none' }}>
                            {this.showTracker()}
                        </div>
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                            {this.showTracker()}
                        </div>
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                            {this.showTracker()}
                        </div>
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                            {this.showTracker()}
                        </div>
                    </Col>
                </Row>
                <Row className="main-col-center align-content-center floating-logo-row mt-5">
                    <FloatingLogo />
                </Row>
                {/* </div> */}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { route: state.route, order: state.order };
}

export default connect(mapStateToProps, { changeRoute, selectOrder })(OrderTracking);