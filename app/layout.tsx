import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Streaming Dashboard",
  description: "A modern streaming dashboard clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-main">{children}</main>
      </body>
    </html>
  );
}

