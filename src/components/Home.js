import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Home = () => {
  const { link } = useParams();
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    fetch("https://still-savannah-83715.herokuapp.com/link/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ linkId: link }),
    })
      .then((res) => res.json())
      .then((data) => setLinkData(data));
  }, [link]);

  if (linkData[0]) {
    window.location.replace(linkData[0].url);
  } else {
    return (
      <div>
        <h1>Link not found</h1>
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Home;
