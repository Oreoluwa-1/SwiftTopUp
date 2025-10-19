// app/layout.tsx
import "./globals.css"
import Navbar from "./component/Navbar"

export const metadata = {
  title: "SwiftTop",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />   {/* Navbar lives here */}
        {children}   {/*  Page content will appear below */}
      </body>
    </html>
  );
}
