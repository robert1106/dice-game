import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

import { ThemeRegistry } from '~/app/providers/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Dice Game',
  description: 'Dice Game',
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>
        <ThemeRegistry>
          {children}

          <Toaster />
        </ThemeRegistry>
      </body>
    </html>
  )
}
