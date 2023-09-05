import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'QR code Component',
  description: 'QR Code Component ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main>
         {children}
        </main>
      </body>
    </html>
  )
}
