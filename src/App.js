import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './Img/Logo.png';
import Cards from './Components/cards';
import { fetchData } from './api/campain_data';
import Stat from './Components/statisticsUI/statistics';

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
    <Router>
      <div className="container">
        <Row>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <Col  sm="12">
            <Routes>
              <Route path="/" element={campaigns.data.map(campaign => (
                <Cards key={campaign.id} campaign={campaign} />
              ))} />
              <Route path="/statistics" element={<Stat />} />
            </Routes>
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
