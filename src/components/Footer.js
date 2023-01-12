import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <Row>
                    <Col>Made by Nicolás Espejo</Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;