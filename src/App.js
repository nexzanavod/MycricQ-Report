import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './Img/Logo.png';
import Cards from './Components/cards';
import { fetchData } from './api/campain_data';


function App() {

  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const data = await fetchData();
      if (data) {
        setCampaigns(data);
      }
      setLoading(false);
    };

    fetchDataFromAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!campaigns) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="container">
    <Row>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
     
      <Col
        md={{
          offset: 3,
          size: 6
        }}
        sm="12"
      >
        {campaigns.data.map(campaign => (
          <Cards key={campaign.id} campaign={campaign} />
        ))}
      </Col>
    </Row>
  </div>
  );
}

export default App;