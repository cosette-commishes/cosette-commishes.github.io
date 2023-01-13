import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeRoute } from "../actions";

class NavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuHidden: true };
        this.pages = [
            {
                pageName: "HOME",
                url: "/"
            },
            {
                pageName: "PRICE LIST",
                url: "/pricing"
            },
            {
                pageName: "T.O.S",
                url: "/terms-of-service"
            },
            {
                pageName: "INFO AND FAQ",
                url: "/info-and-faq"
            },
            {
                pageName: "ORDER TRACKING",
                url: "/order-tracking"
            }
        ];
    }

    showMenu(route) {
        return this.pages.filter(page => page.url !== route).map((page) => {
            return (
                <Col key={page.url} className="d-flex justify-content-around">
                    <Link
                        to={page.url}
                        className="nav-button"
                        style={this.state.menuHidden ? null : { display: 'block' }}
                    >
                        {page.pageName}
                    </Link>
                </Col>
            );
        });
    }

    render() {
        return (
            <div className="nav-header d-flex justify-content-center nav-menu-container">
                <Row className="gx-0">
                    <Col className="nav-menu-button">
                        <img
                            src={require('../img/menu-icon.png')}
                            className="menu-icon"
                            onClick={() => {
                                this.setState(prevState => ({
                                    menuHidden: !prevState.menuHidden
                                }));
                            }}
                        />
                    </Col>
                    {this.showMenu(this.props.route)}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(NavHeader);