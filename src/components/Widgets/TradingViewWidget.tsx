'use client'; // This directive enables client-side rendering for this component

import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clean up any existing script
    const existingScript = container.current.querySelector('script');
    if (existingScript) {
      container.current.removeChild(existingScript);
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'FXOPEN:XAUUSD',
      interval: '15',
      timezone: 'America/New_York',
      theme: 'dark',
      style: '1',
      locale: 'en',
      hide_side_toolbar: false,
      allow_symbol_change: true,
      calendar: false,
      hide_volume: true,
      support_host: 'https://www.tradingview.com'
    });
    
    container.current.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      if (container.current) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container h-screen" ref={container} style={{ width: '100%' }}>
      <div className="tradingview-widget-container__widget h-screen" style={{ width: '100%' }}></div>
    </div>
  );
};

export default memo(TradingViewWidget);
