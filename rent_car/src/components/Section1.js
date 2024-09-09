import React from 'react';
import section1 from '../styles/Section1.module.css'; // 引入 CSS 模組
import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap CSS

const Section1 = () => {
    return (
        <div className={section1.section1}>
            <div className={section1.banner}>
                <div className='container'>
                    <div className='row'>
                        <div className={`${section1.content} col-sm-12 col-md-6 col-lg-6`}>
                            <p>關於</p>
                            <h1>GORENT租車趣</h1>
                        </div>  
                        <div className={`${section1.contentinfo} col-sm-12 col-md-6 col-lg-6`}>
                            <p><span className={section1.sp}>● </span>車款多元自行選擇</p>
                            <p><span className={section1.sp}>● </span>租期彈性隨時還車</p>
                            <p><span className={section1.sp}>● </span>計價實惠絕無欺騙</p>
                            <p><span className={section1.sp}>● </span>輕鬆用車絕無煩惱</p>
                            <p><span className={section1.sp}>● </span>路上拋錨及時支援</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;
