import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "ZuHa Software - Desenvolvimento de Software e Soluções Web",
  description: "Especialistas em desenvolvimento de software, landing pages e soluções web modernas",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/placeholder-logo1.png", sizes: "32x32", type: "image/png" },
      { url: "/placeholder-logo1.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/placeholder-logo1.png",
    apple: [
      { url: "/placeholder-logo1.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
