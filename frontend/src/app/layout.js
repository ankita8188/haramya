
import ClientWrapper from "./Clientwrapper";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Island_Moments,Montserrat_Alternates,Noto_Sans, Funnel_Sans, Be_Vietnam_Pro, Imperial_Script } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

import AOS from "aos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harmya - Explore Bharat Virtually",
  description: "Explore Bharat's heritage and culture virtually with Harmya",
  viewport: "width=device-width, initial-scale=1.0",
};

const islandMoments = Island_Moments({
  variable: "--font-island-moments", // ✅ Add this CSS variable
  subsets: ["latin"],
  weight: "400", // Only 400 is available for this font
});
const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat-alternates", // ✅ Add this CSS variable
  subsets: ["latin"],
  weight: "400", // Only 400 is available for this font
});
const notosans = Noto_Sans({
  variable: "--font-noto-sans", // ✅ Add this CSS variable
  subsets: ["latin"],
  weight: "400", // Only 400 is available for this font
});
const funnel = Funnel_Sans({
  variable: "--font-funnel-sans", // ✅ Add this CSS variable
  subsets: ["latin"],
  weight: "400", // Only 400 is available for this font
});
const vietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro", // ✅ Add this CSS variable
  subsets: ["latin"],
  weight: "400", // Only 400 is available for this font
});
const imperial = Imperial_Script({
  variable: "--font-imperial-script", // ✅ Add this CSS variable
  subsets: ["latin"],
  weight: "400", // Only 400 is available for this font
});



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose weights you need
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable}
         ${islandMoments.variable} 
         ${montserrat.variable} 
         ${notosans.variable}  
         ${funnel.variable} 
         ${vietnam.variable}
         ${imperial.variable}
         ${poppins.variable}
         antialiased`}
      >
       {/* <AOSInitializer />*/}
        <ClientWrapper/>
        {children}
      </body>
      
    </html>
  );
}
