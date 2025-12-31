import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

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
        </main>
      </ThemeProvider>
    </>
  );
}
