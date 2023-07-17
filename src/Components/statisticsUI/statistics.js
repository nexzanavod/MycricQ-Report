import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Col, Row, Carousel,Space, Table, Tag, Watermark  } from 'antd';
import StatsCarousel from './statsCarousel';
import StatTable from './statTable';
import Watermarks from './watermarks';

const Statistics = () => {

    const location = useLocation();
    const campaignData = location.state && location.state.campaignData;

    const titleStyle = {
        color: 'white', // Set your desired color here
    };

  
    

    console.log("@@@@@@@@@@@@@@@@@@@@@@", campaignData);
    return (
        <Row>
            <Col span={24}>
                <Card title={<span style={titleStyle}>Card title</span>} bordered={false} style={{ background: 'linear-gradient(45deg,red , black)', border: "none" }}>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>

                            <StatsCarousel />

                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row>
                        <Col justify style={{padding:"10px"}} span={12}> <StatTable /></Col>
                        <Col span={12}><Watermarks /></Col>
                    </Row>
                    

                </Card>
            </Col>
        </Row>
    );
}

export default Statistics;
