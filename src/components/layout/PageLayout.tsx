import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}