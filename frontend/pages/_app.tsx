import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Analytics } from "@vercel/analytics/react";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/services/graphql";
import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import { Space_Mono } from "@next/font/google";
import localFont from "@next/font/local";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-space-mono",
});

const eurostile = localFont({
  src: "../pages/fonts/EurostileLTStd-Ex2.otf",
  variable: "--font-eurostile",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("prevPath");
    const curPath = storage.getItem("currentPath");
    storage.setItem("hasPrevPage", `${prevPath !== curPath}`);
    // Set the previous path as the value of the current path.
    storage.setItem("prevPath", curPath || "");
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }, [router]);

  return (
    <main
      className={`${spaceMono.variable} ${eurostile.variable} font-eurostile`}
    >
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ApolloProvider>
    </main>
  );
}
