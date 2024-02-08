import React from 'react';
import Script from 'next/script';
function Analytics() {
  return (
    <>
      <Script id="tgs" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}></Script>
      <Script id="tgsm">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GTM_ID}');`}
      </Script>
    </>
  );
}

export default Analytics;
