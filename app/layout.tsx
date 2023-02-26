import './globals.css'
import type  Metadata from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Nutriu',
    template: '%s | Nutriu',
  },
  description: 'La App de nutricion ().',
  openGraph: {
    title: 'Nutriu App',
    description: 'La app de nutricion para .',
    url: 'nutriu.com',
    siteName: 'Nutriu',
    images: [
      {
        url: 'https://nutriu.com/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'es-VE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
