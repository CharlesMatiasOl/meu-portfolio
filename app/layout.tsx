import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charles Matias | Desarrollador Full Stack",
  description:
    "Portfolio de Charles Matias - Desarrollador Full Stack especializado en Backend, Node.js, .NET, React y arquitectura de software.",
  keywords: [
    "Desarrollador Full Stack",
    "Backend",
    "Node.js",
    ".NET",
    "React",
    "TypeScript",
    "APIs",
  ],
}

export const viewport: Viewport = {
  themeColor: "#00d9ff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
