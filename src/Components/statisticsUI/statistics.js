import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Col, Row} from 'antd';
import StatsCarousel from './statsCarousel';
import StatTable from './statTable';
import Watermarks from './watermarks';

const Statistics = () => {

    const location = useLocation();
    const campaignData = location.state && location.state.campaignData;

    const campaignName = campaignData?.attributes.campaign_name
    return (
        <Row>
            <Col span={24}>
                <Card title={<span  className='text-2xl text-white'>{campaignName}</span>} bordered={false} style={{ background: 'linear-gradient(45deg,red , black)', border: "none" }}>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>

                            <StatsCarousel campaignData={campaignData}/>

                        </Col>
                        <Col span={4}></Col>
                    </Row>
                    <Row>
                        <Col justify style={{padding:"10px"}} span={12}> <StatTable campaignData={campaignData} /></Col>
                        <Col span={12}><Watermarks /></Col>
                    </Row>
                    

                </Card>
            </Col>
        </Row>
    );
}

export default Statistics;
