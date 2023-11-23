'use client'

import Script from "next/script"
import * as gtag from "../gtag.js"

const GoogleAnalytics = () => {

    //You can show in the console the GA_TRACKING_ID to confirm
    console.log(gtag.GA_TRACKING_ID)

    return (
        <>
            <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: 
                `var _gaq = _gaq || [];
                _gaq.push(['_setAccount', '${process.env.NEXT_PUBLIC_GOOGLE_ID}']);
                _gaq.push(['_setDomainName', 'none']);
                _gaq.push(['_setAllowLinker', 'true']);
                _gaq.push(['_trackPageview']);

                (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                })();`
,
        }}/>
            <script async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
            />
            <script
                // id="gtag-init"
                // strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}', {
    
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics