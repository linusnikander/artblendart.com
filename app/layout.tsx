import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ArtBlendArt - Shopify Mockups',
  description: 'Page mockups for ArtBlendArt Shopify store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
