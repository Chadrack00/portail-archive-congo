import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "INACP - Institut National des Archives du Congo",
  description: "Ce portail permet à tous les congolais de consulter les archives du pays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body
        className={`antialiased`}
      >
        
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            forcedTheme="light"
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
