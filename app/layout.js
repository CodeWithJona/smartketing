import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins ({ subsets: ['latin'], 
                          display: "swap",
                          style: "normal",
                          variants: ["400", "500", "600", "700"],
                          weight: "400",
                        })

export const metadata = {
  title: 'Smartketing Digital',
  description: 'Una nueva generación en Marketgin Digital',
  keywords: 'marketing, digital, web, marketing digital, marketing digital web'

}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
