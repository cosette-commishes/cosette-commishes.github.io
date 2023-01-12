import React from "react";
import { connect } from "react-redux";
import { changeRoute, selectOrder } from "../actions";
import { Col, ProgressBar, Row } from "react-bootstrap";
import FloatingLogo from "./FloatingLogo";

class OrderTracking extends React.Component {
    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
    }

    showTracker() {
        return (
            <Row className="track-container gx-0">
                <Row className="text-center mt-1 gx-0">
                    <Col className="d-flex justify-content-center mt-2">
                        <div className="paint-icon" />
                    </Col>
                    <Col className="commission-info">Mariano Montenegro</Col>
                    <Col className="commission-info">Type Commission</Col>
                    <Col className="commission-info">Quantity</Col>
                </Row>
                <Row className="gx-0">
                    <Col>Order Status</Col>
                    <Col xs={12} md={9}>
                        <ProgressBar animated now={100} />
                        <div className="d-flex justify-content-around mb-1">
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Sketch</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Lineart</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Color</p>
                            <p className="text-muted mt-1 mb-0 small ms-xl-5">Done</p>
                        </div>
                    </Col>
                </Row>
            </Row>
        );
    }

    render() {
        return (
            <div className="main-container d-flex flex-column justify-content-center align-items-center">
                <div className="text-center main-child-container">
                    <Row>
                        <Col className="text-center">
                            <div className="top-button">
                                ORDER TRACKING
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col></Col>
                        <Col xs={9} md={8} className="overflow-auto tracking-col">
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
                        <Col></Col>
                    </Row>
                    <Row className="main-col-center justify-content-center gx-0">
                        <FloatingLogo />
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { route: state.route, order: state.order };
}

export default connect(mapStateToProps, { changeRoute, selectOrder })(OrderTracking);