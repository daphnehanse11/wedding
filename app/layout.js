import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://daphne-matt-wedding.vercel.app"),
  title: "Daphne & Matt — September 26, 2026",
  description:
    "Join us to celebrate the wedding of Daphne and Matt on September 26, 2026 at the National Capital Trolley Museum in Colesville, Maryland.",
  openGraph: {
    title: "Daphne & Matt — September 26, 2026",
    description:
      "Join us to celebrate the wedding of Daphne and Matt on September 26, 2026 at the National Capital Trolley Museum in Colesville, Maryland.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daphne & Matt — September 26, 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daphne & Matt — September 26, 2026",
    description:
      "Join us to celebrate the wedding of Daphne and Matt on September 26, 2026 at the National Capital Trolley Museum in Colesville, Maryland.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
