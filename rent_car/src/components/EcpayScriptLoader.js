import React, { useEffect, useState } from 'react';

const EcpayScriptLoader = () => {
  const [scriptContent, setScriptContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // 發送 fetch 請求
    fetch("/Scripts/AML/Idverify.js")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        setScriptContent(data); // 保存腳本內容
      })
      .catch((error) => {
        setError(error.toString()); // 捕捉錯誤
      });
  }, []); // 空依賴陣列代表只在組件初次加載時執行一次

  return (
    <div>
      <h1>ECpay Script Loader</h1>
      {error ? (
        <p>Error loading script: {error}</p>
      ) : (
        <pre>{scriptContent}</pre>
      )}
    </div>
  );
};

export default EcpayScriptLoader;
