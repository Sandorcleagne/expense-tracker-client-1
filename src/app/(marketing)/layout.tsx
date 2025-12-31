import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: true,
});

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className="mx-auto max-w-6xl px-4 ">
          <Navbar />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
