import { motion } from 'framer-motion'

export default function TrustedBy() {
  const companies = ['Facebook', 'Stripe', 'Airbnb', 'GitHub', 'CAPCO', 'CrowdStrike']

  return (
    <section className="py-16 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          className="text-center text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by leading companies worldwide
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div 
              key={company}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-gray-500 text-lg font-semibold hover:text-gray-300 transition-colors cursor-default">
                {company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}