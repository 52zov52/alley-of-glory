"use client"

import { motion } from "framer-motion"
import type { Hero } from "@/lib/heroes-data"
import { Star } from "lucide-react"

interface HeroIconProps {
  hero: Hero
  onClick: () => void
}

export function HeroIcon({ hero, onClick }: HeroIconProps) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-1"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 -m-2 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Medal/Star icon container */}
      <div className="relative">
        <motion.div
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/90 to-primary/60 
                     flex items-center justify-center shadow-lg shadow-primary/20
                     border-2 border-primary/40 group-hover:border-primary/80 transition-colors duration-300"
          animate={{
            boxShadow: [
              "0 0 20px rgba(218, 165, 32, 0.2)",
              "0 0 30px rgba(218, 165, 32, 0.3)",
              "0 0 20px rgba(218, 165, 32, 0.2)",
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground fill-primary-foreground" />
        </motion.div>
        
        {/* Rank indicator */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary 
                        border border-primary/50 flex items-center justify-center">
          <span className="text-[10px] font-bold text-primary">{hero.rank}</span>
        </div>
      </div>
      
      {/* Hero name tooltip */}
      <motion.div 
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                   px-2 py-1 rounded bg-card/90 border border-border/50 backdrop-blur-sm
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      >
        <span className="text-xs font-medium text-foreground">{hero.name.split(' ').slice(-1)[0]}</span>
      </motion.div>
    </motion.button>
  )
}
