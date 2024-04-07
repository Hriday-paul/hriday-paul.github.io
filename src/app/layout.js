import "./globals.css";
import ScrollAnim from "@/Components/Ui/ScrollAnim/ScrollAnim";

export const metadata = {
  title: "Hriday paul",
  description: "Hriday paul, hriday paul, hridoy paul, hridoy pal, Hridoy pal, Cumilla",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#082231]">

        <ScrollAnim />

        {children}

        {/* <RoutingTab /> */}

      </body>
    </html>
  );
}
