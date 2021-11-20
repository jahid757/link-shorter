import React from 'react';
import { Nav } from 'react-bootstrap';

const LinkResult = ({linkData}) => {
    return (
        <div title={linkData.url} className="d-flex single_link_item align-items-center mt-4 justify-content-between">
            <p>{linkData.urlName}</p>
            <p><Nav.Link target="_blank" href={linkData.url}>Visit <i className="fas fa-external-link-alt"></i></Nav.Link></p>
        </div>
    );
};

export default LinkResult;