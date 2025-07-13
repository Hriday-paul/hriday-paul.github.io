import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Hriday paul",
  description: "I'm a passionate Fullstack Web Developer from Bangladesh. As a web developer, my goal is to bring ideas to life through thoughtful and impactful web applications, creating memorable experiences for users.",
  metadataBase: new URL('https://hriday-paul.github.io'),
  openGraph: {
    title: 'Hriday paul',
    description: "I'm a passionate Fullstack Web Developer from Bangladesh. As a web developer, my goal is to bring ideas to life through thoughtful and impactful web applications, creating memorable experiences for users.",
    images: ['/opengraph.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#082231]">

        <Toaster />

        <ScrollAnim />

        {children}
      </body>
    </html>
  );
}
