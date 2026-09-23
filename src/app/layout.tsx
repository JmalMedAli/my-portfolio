import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mohamed Ali Jmal | BI, Data, IT & Digital Marketing",
    template: "%s | Mohamed Ali Jmal",
  },
  description:
    "Personal portfolio of Mohamed Ali Jmal — Business Intelligence, Data, IT, Digital Marketing, Sales, Hospitality and Digital Projects.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Mohamed Ali Jmal | BI, Data, IT & Digital Marketing",
    description:
      "Business Intelligence, Data, IT, Digital Marketing, Sales, Hospitality and Digital Projects.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ali Jmal | BI, Data, IT & Digital Marketing",
    description:
      "Business Intelligence, Data, IT, Digital Marketing, Sales, Hospitality and Digital Projects.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} h-full antialiased`} suppressHydrationWarning>
      <body id="top" className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
