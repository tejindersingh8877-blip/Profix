import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profix Masters Center - Professional Service Marketplace",
  description: "Find and book professional services for AC repair, cleaning, home maintenance, and more.",
  keywords: ["services", "marketplace", "AC repair", "cleaning", "home maintenance"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
