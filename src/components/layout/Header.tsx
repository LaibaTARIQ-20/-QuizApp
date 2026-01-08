import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Customers', href: '#customers' },
    { label: 'Changelog', href: '#changelog' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y:  0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e27]/80 backdrop-blur-lg shadow-lg' : 'bg-[#0a0e27]/60 backdrop-blur-sm'
      }`}
      style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 py-4">
          {/* Logo */}
          <div className="flex-shrink-0" style={{ marginLeft: '1rem' }}>
            <a href="#home" className="block">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-6" style={{ marginRight: '1rem' }}>
            <Button variant="ghost" size="sm" className="px-6">
              Sign in
            </Button>
            <Button variant="primary" size="sm" className="px-6">
              Sign up
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(! mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-gray-800">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
                <Button variant="primary" size="sm">
                  Sign up
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}