import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}