import "./globals.css";
import Navbar from "@/compoments/Navbar";
import Footer from "@/compoments/Footer";

export const metadata = {
  title: "Photon SARL",
  description: "Oil & Gas Services",
  icons: {
    icon: "/photon_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <link rel="icon" href="/photon_logo.png"/>
    </head>

    <body>

    <Navbar />

    <main>
      {children}
    </main>

    <Footer />

    </body>

    </html>
  );
}
