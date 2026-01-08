import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-10 border border-purple-500/30 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div 
              className="w-full h-full" 
              style={{
                backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Take control of your business
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies that trust Stellar to secure their APIs 
              and protect their most valuable data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="md">
                Get Started Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="md">
                <Calendar className="mr-2" size={20} />
                Schedule Demo
              </Button>
            </div>

            <p className="text-gray-400 text-xs mt-4">
              No credit card required · 14-day free trial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}