import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { changeRoute } from "../actions";

class Faq extends React.Component {
    infoFaq(){
        return (
            <div className="faq-container">
                <p className="title-pricing mb-4">Why is cosette taling so long?</p>
                <p className="paraph-pricing">I was taking a long time to deliver my commissions because I was in the last stage of university!</p>
                <p className="paraph-pricing">Fortunately I'm on vacation now and I will have more time until August to work, remember that I</p>
                <p className="paraph-pricing">also have two full-time jobs! you can ask about my contracts and shifts if is explicitly necessary.</p>
    
                <p className="title-pricing mb-4">Why did you put the icons and YCH as a priority?</p>
                <p className="paraph-pricing">I have decided to deliver the icons because I already had 80% of the drawings done, so it will be</p>
                <p className="paraph-pricing">easier to finish them as they are small pieces, also, because they are the commissions that I</p>
                <p className="paraph-pricing">accumulated the most for various reasons.</p>
    
                <p className="title-pricing" style={{ "marginBottom": "-29px" }}>Cossette does not answer my messages, </p>
                <p className="title-pricing mb-4">has she scammed me?</p>
                <p className="paraph-pricing">No, I have a long history of clients and no matter how late I was, I always deliver their pieces,</p>
                <p className="paraph-pricing">I give updates and make announcements if something happens, remember that there are</p>
                <p className="paraph-pricing">MANY people in the queue, sometimes I will prioritize you and sometimes I won't. , therefore,</p>
                <p className="paraph-pricing">there is my TOS. and if you acquire my services, you are accepting as they are offered.</p>
            </div>
        );
    }

    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/"+path[ path.length - 1 ]);
    }
    
    render() {
        return (
            <div className="main-container d-flex flex-column justify-content-center align-items-center">
                <div className="text-center main-child-container">
                    <Row>
                        <Col className="text-center">
                            <div className="top-button">
                                INFO AND FAQ
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 main-col-center">
                        {this.infoFaq()}
                    </Row>
                </div>
            </div>
        );
    };

}


const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(Faq);