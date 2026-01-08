import { motion } from 'framer-motion'

export default function TrustedBy() {
  const companies = [
    'Facebook', 'tinder', 'Airbnb', 'Cadbury', 'Canon', 'Spark', 'Quora',
    'Stripe', 'GitHub', 'CAPCO', 'CrowdStrike'
  ]

  return (
    <section className="py-8 border-y border-gray-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          className="text-center text-gray-400 text-sm mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        {/* Scrolling Container */}
        <div className="relative">
          <motion.div 
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Double the companies for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={`${company}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
              >
                <span className="text-gray-500 text-base font-semibold whitespace-nowrap hover:text-gray-300 transition-colors cursor-default">
                  {company}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}