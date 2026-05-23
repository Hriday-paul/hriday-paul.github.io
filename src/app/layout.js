import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: "Hriday paul",
  description: "Full Stack Developer with 3+ years of experience building scalable applications, focusing on performance, clean architecture, and reliable backend systems for real-world production environments.",
  metadataBase: new URL('https://hriday-paul.github.io'),
  openGraph: {
    title: 'Hriday paul',
    description: "Full Stack Developer with 3+ years of experience building scalable applications, focusing on performance, clean architecture, and reliable backend systems for real-world production environments.",
    images: ['/opengraph.png'],
  },
};

const CANONICAL_DOMAIN = "https://hriday-paul.vercel.app";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <link rel="canonical" href={CANONICAL_DOMAIN} />

      <head>
        {/* Redirect github.io to your real domain */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (window.location.hostname === 'hriday-paul.github.io') {
                  window.location.replace(
                    '${CANONICAL_DOMAIN}' + window.location.pathname + window.location.search
                  );
                }
              })();
            `,
          }}
        />
      </head>

      <GoogleTagManager gtmId="GTM-NF8ZKPV3" />
      <body className="min-h-screen bg-[#082231]">

        <Toaster />

        <ScrollAnim />

        {children}
      </body>
    </html>
  );
}
