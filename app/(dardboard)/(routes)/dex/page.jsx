"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalSigner } from '@web3modal/ethers5/react'

let tvScriptLoadingPromise 

const FeatureDex = () => {
  const { open } = useWeb3Modal()

  const { address, chainId, isConnected } = useWeb3ModalAccount()

  const { signer } = useWeb3ModalSigner()

  const handleClick = async () => {
    open({ view: "Account" })
  


  }

  
  const onLoadScriptRef = useRef();
  
  
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_e0f82") &&
        "TradingView" in window
      ) {
        let chartWidget = new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "15",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_e0f82",
          onChartReady: function () {
            console.log("Chart is ready!"); // Thêm dòng này
            const chart = this.chart();
            chart.subscribeCrosshairMove((param) => {
              if (param.point) {
                console.log("Price Entry:", param.point.price);
              }
            });
          },
        });
      }
    }
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-bold text-3xl">

          FeatureDex
        </h1>

        <Button onClick={handleClick} variant="outline" size="lg" className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-white",
          "w-18"
        )}>
          <span>Connect Wallet</span>
          <Sparkles />
        </Button>
        <div className="flex">
          <w3m-network-button />
          <w3m-button balance='hide' />

        </div>

      </div>

   <div className="w-full mt-12 flex">
   <div className='mt-96' style={{width:"1280px",marginTop:"20px"}}>
        <div className="tradingview-widget-container">
          <div style={{ height: "600px" }} id="tradingview_e0f82" />
        </div>
      </div>
   </div>

    </div>
  )
}

export default FeatureDex