import React from "react";
import { Col, Row } from "react-bootstrap";
import FloatingWarning from "./FloatingWarning";
import { connect } from "react-redux";
import { changeRoute } from "../actions";
import FloatingLogo from "./FloatingLogo";

class Pricing extends React.Component {

    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
    }

    pricingInfo() {
        return (
            <>
                <Row>
                    <Col xs={12} md={6}>
                        <p className="title-pricing">ICONS</p>
                        <p className="paraph-pricing">Sketch: 10 USD</p>
                        <p className="paraph-pricing">Flat: 15 USD</p>
                        <p className="paraph-pricing">Full: 18 USD</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="title-pricing">BUST</p>
                        <p className="paraph-pricing">Sketch: 15 USD</p>
                        <p className="paraph-pricing">Flat: 20 USD</p>
                        <p className="paraph-pricing">Full: 23 USD</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p className="title-pricing">HALF BODY</p>
                        <p className="paraph-pricing">Sketch: 20 USD</p>
                        <p className="paraph-pricing">Flat: 25 USD</p>
                        <p className="paraph-pricing">Full: 28 USD</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="title-pricing">FULLBODY</p>
                        <p className="paraph-pricing">Flat: 30 USD </p>
                        <p className="paraph-pricing">Sketch: 25 USD</p>
                        <p className="paraph-pricing">Full:  35 USD- May have background</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p className="title-pricing">REFERENCES</p>
                        <p className="paraph-pricing">Two sides: 50 USD</p>
                        <p className="paraph-pricing">Two sides and close up</p>
                        <p className="paraph-pricing">details, acesories and others: 80 USD</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="title-pricing">EXTRAS</p>
                        <p className="paraph-pricing">Clothes: 8 USD</p>
                        <p className="paraph-pricing">Characters: 8 USD</p>
                        <p className="paraph-pricing">NSFW version: 10 USD</p>
                    </Col>
                </Row></>
        );
    }
    render() {
        return (
            <div className="main-container d-flex flex-column justify-content-center align-items-center">
                <div className="text-center main-child-container">
                    <Row>
                        <Col className="text-center justify-content-center">
                            <div className="top-button">
                                PRICE LIST
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 main-col-center justify-content-center">
                        <Col xs={9}>{this.pricingInfo()}</Col>
                    </Row>
                    <Row className="main-col-center justify-content-center gx-0">
                        <FloatingWarning />
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
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(Pricing);