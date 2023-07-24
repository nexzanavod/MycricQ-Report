import React from 'react';
import { Carousel, Statistic } from 'antd';
import { getRandomBackgroundImage } from '../backGroungImages/randomBackgroundImage';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';


const selectedBackground = getRandomBackgroundImage();


const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: `url(${selectedBackground})`,
};


const StatsCarousel = ({campaignData}) => {


    
  const campaign_data = campaignData?.attributes.leaderboards.data;
  const length = campaign_data.length;

    return (
        <div>
            <Carousel autoplay >
                <div>
                    <div style={contentStyle}><div class='font-bold text-4xl text-center pt-12 text-yellow-300 '>{length} </div>
                    <div class='font-bold text-xl text-center pt-2 text-green-400'>Active Players</div></div>
                </div>
                <div>
                    <h3 style={contentStyle}> <Statistic
                        title="Active"
                        value={"coming soon"}
                        precision={2}
                        valueStyle={{
                            color: 'rgb(54, 228, 69)',
                            fontSize: "40px"
                        }}
                        prefix={<ArrowUpOutlined />}
                    /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Coming Soon</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Coming Soon</h3>
                </div>
            </Carousel>
        </div>
    );
}

export default StatsCarousel;
