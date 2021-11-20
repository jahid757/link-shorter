import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import LinkResult from '../LinkResult';
// import { useState } from 'react';
import Header from './../Header';

const LinkList = () => {

    const [btn1,setBtn1] = useState('active');
    const [btn2,setBtn2] = useState('');
    const[listDataAuto,setListDataAuto] = useState(true);
    const [linkData,setLinkData] = useState([]);

                
    const link = localStorage.getItem('shortLink');
    
    if (listDataAuto === true) {
        setTimeout(() => {
            setLinkData(JSON.parse(link));
            setListDataAuto(false);
        }, 1000);
    }
    

    function handelLinkResult(id){

        if (id === 'btn1'){
            setBtn1('active');
            setBtn2('');
            setLinkData(JSON.parse(link));
        } else if (id === 'btn2'){
            setBtn2('active');
            setBtn1('');
            // https://still-savannah-83715.herokuapp.com/link/get
            fetch('http://localhost:5000/link/get')
            .then(res => res.json())
            .then(data => setLinkData(data));
            console.log(listDataAuto);
        }
    }

    return (
        <div>
            <Header />
            <div className="link_result">
                <div className="link_result_title d-flex justify-content-center align-items-center">
                    <button onClick={() => handelLinkResult('btn1')} className={btn1}>My Link</button>
                    <button onClick={() => handelLinkResult('btn2')} className={btn2}>Global</button>
                </div>
                <div className="link_result_content">
                    {   linkData.length === 0 ?
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" variant="info" />
                        </div>
                        :
                        linkData.map((item,index) => {
                            return <LinkResult key={index} linkData={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LinkList;