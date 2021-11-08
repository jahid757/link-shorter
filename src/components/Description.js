import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Description = () => {
    return (
        <div className="description_area">
            <Container>
                <Row className="align-items-center">
                    <div className="col-md-7">
                        <h1>Short links, big results</h1>
                        <p>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
                    </div>
                    <div className="col-md-5">

                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Description;