import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { changeRoute } from "../actions";

class Tos extends React.Component {
    infoTos() {
        return (
            <Row className="mt-4">
                <Row className="gx-0">
                    <div className="paraph-alert">
                        <p>By commissioning me, you are stating that you have read and agreed to these terms.</p>
                        <p>I will deny your request If I realize you didn't read this or you don’t follow these</p>
                        <p style={{ "marginBottom": "50px" }}>conditions. Basic terms you should know when you hiring my art service:</p>
                    </div>
                </Row>
                <Row className="main-col-center gx-0">
                    <Col></Col>
                    <Col xs={9}>
                        <div className="d-flex justify-content-center tos-sections">
                            <a href="#basic-terms" className="tos-sections-btn">
                                I. Basic Terms
                            </a>
                            <a href="#payment-information" className="tos-sections-btn">
                                II. PAYMENT INFORMATION
                            </a>
                            <a href="#commercial-rights" className="tos-sections-btn">
                                III. COMMERCIAL RIGHTS
                            </a>
                            <a href="#will-wont" className="tos-sections-btn">
                                IV. WILL/WON'T DRAW
                            </a>
                            <a href="#black-list" className="tos-sections-btn">
                                V. BLACK LIST
                            </a>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="main-col-center gx-0">
                    <Col></Col>
                    <Col xs={9} md={8} className="overflow-auto text-start tos-col mt-3 text-left">
                        <div className="title-terms text-center" id="basic-terms">
                            <p>I. Basic Terms</p>
                        </div>
                        <ul className="paraph-pricing">
                            <li>Commissioner can re-upload the image with credits given to myself, you can not remove my watermark or cover it in anyway, the artwork cannot be used commercially, or claimed as your own.</li>
                            <br />
                            <li>No matter how much time passes, I DO NOT MAKE REFUNDS, if you make the payment you are aware that you accept this term, I will only choose to make a Refund in very extreme cases or if you are a very problematic person, If the treatment that you have with me is rude, problematic or similar, I will give you a refun with the possibility of making a beware, likewise you will be added to my blacklist.</li>
                            <br />
                            <li>Complicated commission take longer, be patient and don’t rush me, I always do my job.</li>
                            <br />
                            <li>You can ask for updates, but please don't ask me every day if the commission is ready or not; if I have the opportunity, I will send you a WIP, AND PLEASE DON´T SEND ME BUMPS.</li>
                            <br />
                            <li>I have the right to draw personal art or take a break while I have a commission or trade pending, I have a life to attend too.</li>
                            <br />
                            <li>If I'm not active for a really long time, I will send you a DM explaining what’s going on.</li>
                            <br />
                            <li>All my artwork is copyrighted, I will put my watermark on every drawing. If you want a version without my watermark you can ask, but its NOT allowed the public use, only personal.</li>
                            <br />
                            <li>You are allowed to re-post the commission or use it as your profile photo on your page but it must be credited including the link or any of my usersname.</li>
                            <br />
                            <li>I will start the commission when payment is received, NOT before.</li>
                            <br />
                            <li>You are NOT allowed to recolor my work.</li>
                            <br />
                            <li>If you already accepted the WIP of your commission, and then you ask for a change when the work is already finished, you have two options: pay more OR just keep the drawing.</li>
                            <br />
                            <li>I have the right to cancel a commission.</li>
                            <br />
                            <li>I don't work Saturdays, Sundays and holidays / 6 p.m to 10 p.m ONLY.</li>
                            <br />
                        </ul>
                        <div className="title-terms text-center" id="payment-information">
                            <p>II. Payment Information</p>
                        </div>
                        <ul className="paraph-pricing">
                            <li>I send my PayPal Email, this means that you need to send the screenshot of the payment.</li>
                            <br />
                            <li>Refunds on emergency commissions or emergency adoptables are not available.</li>
                            <br />
                            <li>I don’t do payment plans. </li>
                            <br />
                            <li>You only have 24 hours to send the payment, if you don't, I will decline your request.</li>
                            <br />
                            <li>Paying via paypal means that I only acept USD payments, if you are from Colombia you can send the payment via Nequi or Daviplata. (the total cost will be assumed in dollars of the current rate).</li>
                            <br />
                            <li>I think it's right to mention it again, <strong>I DO NOT MAKE REFUNDS OF ANYTHING</strong>, I sometimes take months at a time to finish commissions, <strong>IF THIS BOTHERS YOU RECONSIDER COMMISSIONING ME</strong>.</li>
                            <br />
                            <li>If you see me taking more commissions it DOES NOT mean that I have forgotten about yours, I just need money like every artists to eat, live and suplis.</li>
                            <br />
                        </ul>
                        <div className="title-terms text-center" id="commercial-rights">
                            <p>III. Commercial Rights</p>
                        </div>
                        <ul className="paraph-pricing">
                            <li>ALWAYS COME WITH A +50% FEE</li>
                            <br />
                            <li>With commercial rights you are allowed to make any sort of merch with the artwork. Credit is still required for usage of the artwork, even if altered or edited.</li>
                            <br />
                        </ul>
                        <div className="title-terms text-center" id="will-wont">
                            <p>IV. WILL/WON'T DRAW</p>
                        </div>
                        <ul className="paraph-pricing">
                            <li><strong>Allowed Content:</strong></li>
                            <br />
                            <li>Ferals.</li>
                            <li>Gore.</li>
                            <li>Original Species.</li>
                            <li>Semi-NSFW.</li>
                            <li>NSFW.</li>
                            <li>Pokemon.</li>
                            <li>Food.</li>
                            <li>Chibis.</li>
                            <li>Cubs or babys - <strong>ONLY IN SFW</strong>.</li>
                            <li>Complicated Designs.</li>
                            <li>Anthros.</li>
                            <br />
                            <li><strong>Disallowed Content:</strong></li>
                            <br />
                            <li>Mecha.</li>
                            <li>Extreme fetichs or paraphilias (Ask).</li>
                            <li>Some Humans  (Ask).</li>
                            <li>Any sort of hateful content, such as racism, transphobia, homophobia, and characters with Nazi/Soviet/etc. imagery or paraphernalia.</li>
                            <br />
                        </ul>
                        <div className="title-terms text-center" id="black-list">
                            <p>V. Black List</p>
                        </div>
                        <ul className="paraph-pricing">
                            <li>This list is exclusively for people with a terrible client experience, these people simply do not be able to have any kind of professional treatment with me again, once inside you will not be able to leave.</li>
                            <br />
                            <li><strong>Facebook:</strong> Fitch Emmerson. <strong>-REASON:</strong> Rude treatment, insults, hypocrisy and disrespect.</li>
                            <br />
                            <li><strong>Facebook:</strong>Benjamín de Solcito. <strong>-REASON:</strong> Simple personal conflicts, bad experiences, she applied hardreference on commissions paid by another client.</li>
                            <br />
                            <li><strong>Facebook:</strong> Domingo Acosta Mijares. <strong>-REASON:</strong> Possible pedophile, found with Cubs porn content.</li>
                            <br />
                        </ul>
                    </Col>
                    <Col></Col>
                </Row>
            </Row>
        );
    }

    componentDidMount() {
        const path = (window.location.pathname).split('/');
        this.props.changeRoute("/" + path[path.length - 1]);
    }
    render() {
        return (
            <div className="main-container d-flex flex-column justify-content-center align-items-center">
                <div className="text-center main-child-container">
                    <Row>
                        <Col className="text-center">
                            <div className="top-button">
                                T.O.S
                            </div>
                        </Col>
                    </Row>
                    {this.infoTos()}
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return { route: state.route };
}

export default connect(mapStateToProps, { changeRoute })(Tos);