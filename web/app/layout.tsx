import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animated Fluent Emojis - Microsoft",
  description:
    "All the Microsoft Fluent animated emojis are available in one place and ready to use in your next project or README file.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://telemoji.vercel.app/",
    title: "Animated Telemoji - Telegram",
    description:
      "All the Microsoft Fluent animated emojis are available in one place and ready to use in your next project or README file.",
  },

  icons: [
    {
      url: "favicons/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "favicons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "favicons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
  manifest: "favicons/site.webmanifest",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
        <script async src="https://cdn.splitbee.io/sb.js" />
      </body>
    </html>
  );
}
