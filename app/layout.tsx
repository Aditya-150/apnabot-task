import React from "react";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Image from "next/image";

import { Providers } from "./providers";
import logo from "./../public/iloveresume_logo.png";

import ClientLoadingWrapper from "@/components/client-loading-wrapper"; // Import the client-side wrapper
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <ClientLoadingWrapper>
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
            </ClientLoadingWrapper>
            <footer className="mx-auto w-full max-w-7xl pt-20 pb-16 flex-grow">
              <div className="lg:flex lg:items-end lg:justify-between">
                <div>
                  <div className="flex justify-center text-danger lg:justify-start">
                    <Image
                      alt="Logo for website"
                      height={150}
                      src={logo}
                      width={150}
                    />
                  </div>

                  <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                    Craft Your Success Story: Build Your Perfect Resume Today!
                  </p>
                </div>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-danger"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-danger"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-danger"
                      href="/#faq"
                    >
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-danger"
                      href="/career"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              </div>

              <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                Copyright &copy; {new Date().getFullYear()}. All rights
                reserved.
              </p>
            </footer>
            <div className="fixed right-5 bottom-5 z-40">
              <Link
                className="inline-block rounded-full bg-danger text-white shadow transition hover:shadow-md p-4 hover:shadow-danger-200"
                href="/#"
              >
                <span className="sr-only">Back to top</span>

                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
