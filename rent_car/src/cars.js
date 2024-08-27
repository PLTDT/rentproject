import React from 'react';

 // 確保你正確導入了 CSS 文件

const cards = [
  {
    imgSrc: process.env.PUBLIC_URL + '/Image/altis.png',
    altText: 'Toyota Altis',
    title: 'Toyota Altis',
    text: 'Toyota Altis 是一款集舒適、性能和安全於一身的轎車。其現代化設計和高效能引擎，讓駕駛體驗更加愉悅。內裝豪華，配備先進的科技和安全功能，使其成為家庭和商務用途的理想選擇。'
  },
  {
    imgSrc: process.env.PUBLIC_URL + '/Image/corollacross .png',
    altText: 'Corolla Cross',
    title: 'Corolla Cross',
    text: 'Toyota Corolla Cross 是一款結合 SUV 與轎車優點的跨界車型。其高底盤設計和寬敞的內部空間，提供了優異的駕駛視野和乘坐舒適度。搭載先進的混合動力系統和豐富的安全科技，讓駕駛者在享受高效能與低油耗的同時，保障行車安全。這款車是家庭出行和都市生活的理想選擇。'
  },
  {
    imgSrc: process.env.PUBLIC_URL + '/Image/vios.png',
    altText: 'Toyota Vios',
    title: 'Toyota Vios',
    text: 'Toyota Vios 是一款經濟實惠且可靠的緊湊型轎車。其時尚的外觀設計和寬敞的內部空間，為乘客提供了舒適的駕乘體驗。搭載高效能引擎和先進的安全系統，Vios 不僅具備優異的燃油經濟性，還提供了卓越的駕駛穩定性和安全性。這款車是日常通勤和城市駕駛的理想選擇。'
  },
  {
    imgSrc: process.env.PUBLIC_URL + '/Image/camery.png',
    altText: 'Toyota Camery',
    title: 'Toyota Camery',
    text: 'Toyota Camry 是一款兼具豪華與性能的中型轎車。其優雅的外觀設計和高品質的內裝材料，為駕駛者和乘客提供了舒適且高檔的乘坐體驗。Camry 配備強勁且高效能的引擎，並結合先進的混合動力技術，實現了卓越的燃油效率和動力輸出。豐富的科技配置和全面的安全系統，使得 Camry 成為家庭和商務用途的最佳選擇。'
  },
  {
    imgSrc: process.env.PUBLIC_URL + '/Image/sienta.png',
    altText: 'Toyota Sienta',
    title: 'Toyota Sienta',
    text: 'Toyota Sienta 是一款靈活且實用的多功能 MPV（多用途車）。其時尚且緊湊的外觀設計，搭配寬敞的內部空間，提供了卓越的乘坐舒適性和靈活的座椅佈局。Sienta 配備了高效能引擎和先進的混合動力系統，實現了優異的燃油經濟性。豐富的安全配置和智能科技，使得 Sienta 成為家庭出行和日常使用的理想選擇，滿足各種生活需求。'
  },
  {
    imgSrc: process.env.PUBLIC_URL + '/Image/yaris.png',
    altText: 'Toyota Yaris',
    title: 'Toyota Yaris',
    text: 'Toyota Yaris 是一款靈巧且經濟的緊湊型轎車，專為城市駕駛而設計。其時尚的外觀和精緻的內飾，使其成為年輕一代和都市上班族的理想選擇。Yaris 配備了高效能的引擎和先進的混合動力系統，提供了優異的燃油經濟性和敏捷的駕駛體驗。豐富的安全配置和便捷的科技功能，保障駕駛者和乘客的安全與舒適，是一款兼具實用性和現代感的汽車。'
  },
];

const CarRental = () => {
  return (
    <div className="wrap-cards">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="wrap-image">
            <img src={card.imgSrc} alt={card.altText} />
          </div>
          <div className="contents">
            <h3>{card.title}</h3>
            <p className="text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => (
  <div>
    <h1>車款介紹</h1>
    <CarRental />
  </div>
);

export default App;
