import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '../ui/Button'
import GradientBlur from '../ui/GradientBlur'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 100K requests/month',
        'Basic authentication',
        'Email support',
        'API documentation',
        '99.9% uptime SLA'
      ],
      highlighted: false,
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'For growing businesses with advanced needs',
      features: [
        'Up to 1M requests/month',
        'Advanced security features',
        'Priority support',
        'Custom integrations',
        '99.95% uptime SLA',
        'Advanced analytics'
      ],
      highlighted: true,
      ctaText: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited requests',
        'Enterprise-grade security',
        '24/7 dedicated support',
        'Custom SLA',
        'On-premise deployment',
        'White-label options'
      ],
      highlighted: false,
      ctaText: 'Contact Sales'
    }
  ]

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <GradientBlur color="purple" size="large" className="top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Flexible plans and features
          </h2>
          <p className="text-gray-400 text-base">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-6 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-purple-600/20 to-pink-600/20 border-2 border-purple-500 md:scale-105 shadow-2xl'
                  : 'bg-gray-800/30 border border-gray-700'
              } backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 relative`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              
              {/* Description */}
              <p className="text-gray-400 text-xs mb-4">{plan.description}</p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>}
              </div>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.highlighted ? 'primary' : 'outline'} 
                className="w-full"
                size="sm"
              >
                {plan.ctaText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p 
          className="text-center text-gray-400 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          All plans include SSL certificates, automatic backups, and 24/7 monitoring.
        </motion.p>
      </div>
    </section>
  )
}