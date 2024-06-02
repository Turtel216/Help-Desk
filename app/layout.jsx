import './globals.css'
import { Rubik } from 'next/font/google'

import NavBar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Help Desk',
  description: 'Project by Dimitrios Papakonstantinou',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar/>
        {children}</body>
    </html>
  )
}
