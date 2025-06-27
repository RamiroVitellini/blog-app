import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Travelers Stories",
    template: `%s - Repositorio de Ramiro Vitellini`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.png", // Cambiado aquí
    // Si querés ambos: icon: ["/logo.png", "/favicon.ico"],
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
          "min-h-screen w-full font-sans antialiased relative",
          fontSans.variable,
          "bg-gradient-to-br from-[#e0eafc] via-[#a1c4fd] to-[#70b6f9]"
        )}
      >
        <SessionProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative flex flex-col min-h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              {/* Footer SIN fondo blanco */}
              <footer className="w-full flex items-center justify-center py-3 bg-transparent">
                <span className="text-default-600">Desarrollado por</span>
                <a
                  href="https://github.com/RamiroVitellini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-primary hover:underline font-semibold"
                  aria-label="GitHub de Ramiro Vitellini"
                >
                  Ramiro
                </a>
              </footer>
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
