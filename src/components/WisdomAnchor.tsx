import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const wisdomQuotes = [
  {
    quote: "Everything in nature has its own frequency. Finding yours is the beginning of healing.",
    path: '/systems',
  },
  {
    quote: "Calmness is not the absence of noise — it is finding your own frequency.",
    path: '/systems',
  },
  {
    quote: "Technology turns meditation from practice into sensation.",
    path: '/',
  },
  {
    quote: "We don't cook your skin. We resonate with your cells.",
    path: '/systems',
  },
]

export default function WisdomAnchor() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [dwellTime, setDwellTime] = useState(0)

  useEffect(() => {
    if (dismissed) return
    const timer = setInterval(() => {
      setDwellTime((prev) => {
        if (prev >= 44) {
          setVisible(true)
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [dismissed])

  const randomQuote = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)]

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 30, x: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-40 max-w-xs"
        >
          <div className="frosted rounded-lg p-5 shadow-lg">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-text-dim hover:text-accent-glow transition-colors text-lg leading-none"
            >
              &times;
            </button>
            <div className="flex items-start gap-3">
              <Sparkles size={18} className="text-accent-glow flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-text-primary leading-relaxed italic">
                  &ldquo;{randomQuote.quote}&rdquo;
                </p>
                <p className="text-xs text-text-muted mt-2">
                  &mdash; Founder&apos;s Reflection
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { wisdomQuotes }