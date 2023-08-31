import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { Card, CardTitle, Row, Col, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from 'react-countup';
import "./cards.css";
import { ExportToCsv } from 'export-to-csv';
import { getRandomBackgroundImage } from './backGroungImages/randomBackgroundImage';

function Cards({ campaign }) {
  const navigate = useNavigate();

  const selectedBackground = getRandomBackgroundImage();


  const campaign_name = campaign?.attributes.campaign_name;
  const campaign_data = campaign.attributes.leaderboards.data;
  const length = campaign_data.length;

  const newData = campaign_data.map((dataItem) => {
    const mobile = dataItem.attributes.mobile;
    const player = dataItem.attributes.player;
    const points = dataItem.attributes.points;
    const score = dataItem.attributes.score;
    const lastPlay = dataItem.attributes.updatedAt;

    return {
      mobile: mobile,
      player: player,
      points: points,
      score: score,
      lastPlay: lastPlay,
    };
  });

  const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: false,
    title: 'Campaign Data',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(options);

  function handleExportCsv() {
    csvExporter.generateCsv(newData);
  }

  function handleCampaignStat() {
    navigate('/statistics', { state: { campaignData: campaign } });
  }

  return (
    <div>
      <Card className="transparent-card" style={{ backgroundImage: `url(${selectedBackground})` }}>
        <div className='margin'>
          <Row style={{ margin: '10px', fontSize: '30px', color: 'white' }}>
            <Col ls="9">
              <CardTitle tag="h4" style={{ fontWeight: 'bold' }}>
                {campaign_name}
              </CardTitle>
            </Col>
            <Col xl="3" style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bold', background: 'linear-gradient(45deg, red, yellow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <CountUp end={length} duration={3.00} />
            </Col>
          </Row>
          <Row>
            <Col xl="6" style={{ textAlign: 'center', padding: '10px' }}>
              <Button style={{background: 'linear-gradient(95deg, green, black)',border: "none"}} onClick={handleExportCsv} >
                Download Report
              </Button>
            </Col>
            <Col xl="6" style={{ textAlign: 'center', padding: '10px' }}>
              <Button style={{background: 'linear-gradient(95deg, red, black)',border: "none"}} onClick={handleCampaignStat}>
                Campaign Statistics
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default Cards;
