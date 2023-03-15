import React from "react";
import { connect } from "react-redux";
import { changeRoute, selectOrder } from "../actions";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import FloatingLogo from "./FloatingLogo";
import Footer from "./Footer";

var test = [
    {
        "fechaPedido": "nov/01/2022",
        "nombre": "Alfredo Gutierrez",
        "valor": "10",
        "estado": "Sketch",
        "fechaFinalizado": null,
        "url": null,
        "tipo": "Sketchy"
    },
    {
        "fechaPedido": "nov/01/2022",
        "nombre": "Pedro Monsalve",
        "valor": "10",
        "estado": "Lineart",
        "fechaFinalizado": "mar/14/2023",
        "url": null,
        "tipo": "Icon"
    },
    {
        "fechaPedido": "nov/01/2022",
        "nombre": "Ruth Gonzalez",
        "valor": "10",
        "estado": "Color",
        "fechaFinalizado": null,
        "url": null,
        "tipo": "Halfbody"
    },
    {
        "fechaPedido": "nov/01/2022",
        "nombre": "Raul Camargo",
        "valor": "10",
        "estado": "Done",
        "fechaFinalizado": null,
        "url": "https://google.com",
        "tipo": "Fullbody"
    },
    {
        "fechaPedido": "nov/01/2022",
        "nombre": "Edgar Poe",
        "valor": "10",
        "estado": "Sketch",
        "fechaFinalizado": null,
        "url": null,
        "tipo": "Illustration"
    }
]

class OrderTracking extends React.Component {
    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
        window.scrollTo(0, 0);
    }

    getOrderStatus(status) {
        switch (status.toLowerCase()) {
            case 'sketch':
                return 20;
            case 'lineart':
                return 45;
            case 'color':
                return 70;
            case 'done':
                return 100;
            default:
                return 0;
        }
    }

    showTracker(order) {
        return (
            <Container>
                <Row className="text-center mb-3 tracking-info">
                    <Col xs={12} md={4} xl={6} className="d-flex justify-content-center mt-2 mb-3">
                        <div className="paint-icon" />
                    </Col>
                    <Col xs={12} md={2} className="text-center">{order.nombre}</Col>
                    <Col xs={12} md={2} className="text-center">{order.tipo}</Col>
                    <Col xs={12} md={2} className="text-center">
                        <a href={order.url} rel="noopener noreferrer" target="_blank" class={this.getOrderStatus(order.estado) === 100 ? 'url-btn' : 'url-btn btn-disabled'}>Download</a>
                    </Col>
                </Row>
                <Row className="gx-0 mb-2">
                    <Col className="text-muted">Order Status</Col>
                    <Col xs={12}>
                        <ProgressBar animated now={this.getOrderStatus(order.estado)} />
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

    renderOrders(data) {
        return (
            <Col xs={12} className="overflow-auto tracking-col">
                {data.map((order, idx) => (
                    <>
                        <button className="accordion"
                            onClick={() => {
                                this.props.order === idx ? this.props.selectOrder(-1) :
                                    this.props.selectOrder(idx);
                            }} >
                            {order.nombre}
                        </button>
                        <div className="panel"
                            style={this.props.order === idx ? { display: 'block' } : { display: 'none' }}
                        >
                            {this.showTracker(order)}
                        </div>
                    </>
                ))}

            </Col>
        );
    }



    render() {
        return (
            <Container>
                <Container className="main-child-container">
                    <Row className="justify-content-center">
                        <Col lg={4} className="text-center">
                            <div className="top-button">
                                ORDER TRACKING
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="container-paraph-pricing my-4 text-center">
                                <p className="paraph-pricing">
                                    Follow your commission status and download it once is ready!
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        {this.renderOrders(test)}
                    </Row>
                    <Row className="main-col-center align-content-center floating-logo-row">
                        <FloatingLogo />
                    </Row>
                </Container>
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
    console.log(state);
    return { route: state.route, order: state.order };
}

export default connect(mapStateToProps, { changeRoute, selectOrder })(OrderTracking);