import { motion } from 'framer-motion'

export default function TrustedBy() {
  const companies = [
    { name: 'tinder', style: 'normal' },
    { name: 'airbnb', style: 'normal' },
    { name: 'Cadbury', style: 'script' },
    { name: 'Canon', style: 'normal' },
    { name: 'Spark', style: 'script' },
    { name: 'Quora', style: 'normal' },
    { name: 'HubSpot', style: 'normal' }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a1628] to-[#0f1629] overflow-hidden">
      <div className="relative max-w-full">
        {/* Scrolling Container */}
        <div className="relative flex items-center">
          <motion.div 
            className="flex items-center gap-16 lg:gap-20 xl:gap-24"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Triple the companies for seamless infinite loop */}
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <span 
                  className={`text-gray-400 whitespace-nowrap hover:text-gray-200 transition-colors duration-300 cursor-default ${
                    company.style === 'script' 
                      ? 'text-2xl lg:text-3xl font-bold italic' 
                      : 'text-xl lg:text-2xl font-semibold'
                  }`}
                  style={{
                    fontFamily: company.style === 'script' 
                      ? 'Georgia, "Times New Roman", serif' 
                      : 'system-ui, -apple-system, sans-serif',
                    letterSpacing: company.style === 'script' ? '0.02em' : 'normal'
                  }}
                >
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}