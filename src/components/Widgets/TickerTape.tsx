// src/components/Widgets/TickerTape.tsx

'use client';

import React, { useEffect } from 'react';

const TickerTape: React.FC = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { description: 'GOLD', proName: 'FXOPEN:XAUUSD' },
        { description: 'NAS100', proName: 'FOREXCOM:NAS100' },
        { description: 'GBPUSD', proName: 'FOREXCOM:GBPUSD' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });

    // Append the script to the document
    document.querySelector('.tradingview-widget-container')?.appendChild(script);

    // Cleanup on component unmount
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TickerTape;
