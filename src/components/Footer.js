import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span>Made by </span>
                <a href="https://www.linkedin.com/in/nicolas-david-espejo-bernal/" rel="noopener noreferrer" target="_blank">
                    Nicolás Espejo
                    <div className="img-dev" />
                </a>
                <br />
                <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by frelayasia - Flaticon</a>
            </div>
        );
    }
}

export default Footer;