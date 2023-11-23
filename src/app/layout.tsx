
/* eslint-disable @next/next/next-script-for-ga */
import './globals.css'

import { UserProvider } from '@auth0/nextjs-auth0/client';

import Navbar from './components/navbar';

// import GoogleAnalytics from './GoogleAnalytics';
import {Julius_Sans_One} from "next/font/google";


const julius = Julius_Sans_One({subsets:["latin"],weight:"400",variable:"--julius-font",display:"swap"});




export const metadata = {
  title: 'Plant World',
  description: 'Plant World will have great experience',
}
// type Props = {
//   className?: string
// }

export default async function RootLayout({ children, }:{children :React.ReactNode}) {

  return (
    <html lang="en">
      <body >

      <UserProvider>
      <div className={`${julius.className}`} style={{position:"fixed",zIndex:1,width:"100%"}}>
        <Navbar />
      </div>
     {children}
     </UserProvider>
     <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: 
                 ` var _gaq = _gaq || [];
                  _gaq.push(['_setAccount', '$GT-TQKWM7J']);
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
       <script async src="https://www.googletagmanager.com/gtag/js?id=GT-TQKWM7J"></script>
<script
dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'GT-TQKWM7J');`}}
/>

        </body>
    </html>
  )
}
