import "./globals.css";
import Navbar from "@/compoments/Navbar";
import Footer from "@/compoments/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <link rel="icon" href="https://ghost-15.github.io/photon/photon_logo.png"/>
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
