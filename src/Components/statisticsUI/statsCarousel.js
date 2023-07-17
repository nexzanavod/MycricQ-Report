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


const StatsCarousel = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle}><h1 style={{ textAlign: "center", paddingTop: "25px", color: "yellow" }}>12</h1><h4>Active Players</h4></div>
                </div>
                <div>
                    <h3 style={contentStyle}> <Statistic
                        title="Active"
                        value={"Narmal"}
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
