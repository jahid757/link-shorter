import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import img from '../assets/images/left.png'
import img from '../assets/images/undraw_share_link_qtxe.svg'
const Description = () => {
    return (
        <div className="description_area mb-5">
            <Container>
                <Row className="align-items-center">
                    <div className="col-md-7 mb-3">
                        <h1>Short links, big results</h1>
                        <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
                    </div>
                    <div className="col-md-5 mb-3">
                        <img src={img} alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Description;