import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// component import from root component
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio raflyasliGalek",
  description: "Rafly Rizqullah Yusuf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
