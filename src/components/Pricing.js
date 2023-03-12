import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FloatingWarning from "./FloatingWarning";
import { connect } from "react-redux";
import { changeRoute } from "../actions";
import FloatingLogo from "./FloatingLogo";

class Pricing extends React.Component {

    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
        window.scrollTo(0, 0);
    }

    pricingInfo() {
        return (
            <>
                <Row className="text-center">
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
                <Row className="text-center">
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
                        <p className="paraph-pricing">Full:  ground</p>
                    </Col>
                </Row>
                <Row className="text-center mb-5">
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
                </Row>
            </>
        );
    }
    render() {
        return (
            // <div className="main-container d-flex flex-column justify-content-center align-items-center">
                // <div className="text-center main-child-container">
                <Container className="main-child-container">
                    <Row className="justify-content-center">
                        <Col xs={12} xl={4}>
                            <div className="top-button">
                                PRICE LIST
                            </div>
                        </Col>
                    </Row>
                        {this.pricingInfo()}
                    <Row className="floating-warning-row">
                        <FloatingWarning />
                    </Row>
                    <Row className="main-col-center justify-content-center floating-logo-row">
                        <FloatingLogo />
                    </Row>
                </Container>
                // </div>
            // </div>
        );
    }

}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(Pricing);