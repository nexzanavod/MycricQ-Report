import React from 'react';
import { Card, CardTitle, Row, Col, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from 'react-countup';
import "./cards.css";
import backgroundImage1 from './backGroungImages/backimage1.png';
import backgroundImage2 from './backGroungImages/backimage2.png';
import backgroundImage3 from './backGroungImages/backimage3.png';
import { ExportToCsv } from 'export-to-csv';

function Cards({ campaign }) {
  const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3];
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedBackground = backgroundImages[randomIndex];

  const campaign_name = campaign?.attributes.campaign_name;
  const campaign_data = campaign.attributes.leaderboards.data;
  const length = campaign_data.length;

  const newData = campaign_data.map((dataItem) => {
    const mobile = dataItem.attributes.mobile;
    const player = dataItem.attributes.player;
    const points = dataItem.attributes.points;
    const score = dataItem.attributes.score;

    return {
      mobile: mobile,
      player: player,
      points: points,
      score: score,
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

  return (
    <div>
      <Card className="transparent-card" style={{ backgroundImage: `url(${selectedBackground})` }}>
        <div className='margin'>
          <Row style={{ margin: '10px', fontSize: '15px', color: 'white' }}>
            <Col ls="9">
              <CardTitle tag="h4" style={{ fontWeight: 'bold' }}>
                {campaign_name}
              </CardTitle>
            </Col>
            <Col xl="3" style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', background: 'linear-gradient(45deg, red, yellow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <CountUp end={length} 
              duration={3.00}
              />
            </Col>
          </Row>
          <Col style={{ textAlign: 'center', padding: '7px' }}>
            <Button onClick={handleExportCsv} color="success">
              Download Report
            </Button>
          </Col>
        </div>
      </Card>
    </div>
  );
}

export default Cards;