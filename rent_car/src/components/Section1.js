import React from 'react';
import section1 from '../styles/Section1.module.css';

const Section1 = () => {
    return (
    <div className={section1.section1}>
        <div className={section1.banner}>
            <div className={section1.content}>
                <p>關於</p>
                <h1>GORENT租車趣</h1>
            </div>
            <div className={section1.contentinfo}>
                <p>車款多元自行選擇</p>
                <p>租期彈性隨時還車</p>
                <p>計價實惠絕無欺騙</p>
                <p>輕鬆用車絕無煩惱</p>
                <p>路上拋錨及時支援</p>
            </div>
        </div>
    </div>
    )
}

export default Section1;
