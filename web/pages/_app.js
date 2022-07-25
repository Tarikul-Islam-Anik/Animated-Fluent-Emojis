import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Head>
        <title>Microsoft Teams - Animated Emojis</title>
        <link rel="shortcut icon" href="/static/favicon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="OxyZen" />
        <meta
          name="description"
          content="All the Microsoft Teams animated emojis are available in one place and ready to use in your next project or README file."
        />
        <meta property="og:title" content="Microsoft Teams - Animated Emojis" />
        <meta
          property="og:description"
          content="All the Microsoft Teams animated emojis are available in one place and ready to use in your next project or README file."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Microsoft-Teams-Animated-Emojis/master/assets/images/banner.gif"
        />
        <meta
          property="og:url"
          content="https://Microsoft-Teams-Animated-Emojis.vercel.app"
        />
        <meta
          property="og:site_name"
          content="Microsoft Teams - Animated Emojis"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="Microsoft Teams - Animated Emojis"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
