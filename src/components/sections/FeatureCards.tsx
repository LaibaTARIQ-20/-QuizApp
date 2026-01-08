// src/components/sections/FeatureCards.tsx
import { motion } from 'framer-motion'
import { Shield, Activity, FileText, Check } from 'lucide-react'

export default function FeatureCards() {
  const features = [
    {
      icon: Shield,
      title: 'Authentication Services',
      description: 'Simplify your security with authentication services that protect user credentials, verify identity seamlessly, and support multiple sign-in methods.',
      items: ['OAuth 2.0 & OpenID', 'Multi-factor Auth', 'Session Management']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Track API usage, detect anomalies, and respond to threats in real-time with our advanced monitoring dashboard.',
      items: ['Live Dashboard', 'Anomaly Detection', 'Custom Alerts']
    },
    {
      icon: FileText,
      title: 'Comprehensive Logging',
      description: 'Maintain detailed audit trails of all API activities with encrypted storage and easy retrieval.',
      items: ['Encrypted Storage', 'Search & Filter', 'Export Reports']
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-[#070911]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {feature.description}
              </p>

              {/* Feature Items */}
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}