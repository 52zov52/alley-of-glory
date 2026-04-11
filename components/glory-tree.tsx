"use client"

import { motion } from "framer-motion"
import type { Hero } from "@/lib/heroes-data"
import { HeroIcon } from "./hero-icon"

interface GloryTreeProps {
  heroes: Hero[]
  treeIndex: number
  onHeroClick: (hero: Hero) => void
}

export function GloryTree({ heroes, treeIndex, onHeroClick }: GloryTreeProps) {
  const isReversed = treeIndex % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: treeIndex * 0.2 }}
      className="relative flex flex-col items-center"
    >
      {/* Tree SVG - Exact copy of reference minimalist tree */}
      <svg
        viewBox="0 0 200 400"
        className="w-48 h-80 md:w-64 md:h-96 lg:w-80 lg:h-[450px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ground line */}
        <motion.line
          x1="30" y1="360" x2="170" y2="360"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/80"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        
        {/* Trunk base - curved widening at bottom */}
        <motion.path
          d="M100 360 C85 355 80 350 90 340 L100 340"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-foreground/90"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />
        <motion.path
          d="M100 360 C115 355 120 350 110 340 L100 340"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-foreground/90"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
        />
        
        {/* Main trunk */}
        <motion.line
          x1="100" y1="340" x2="100" y2="120"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-foreground/90"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        
        {/* === LOWER BRANCHES === */}
        {/* Lower left main branch */}
        <motion.line
          x1="100" y1="280" x2="45" y2="220"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/80"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        {/* Lower left twig 1 */}
        <motion.line
          x1="65" y1="245" x2="35" y2="215"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.85 }}
        />
        {/* Lower left twig 2 */}
        <motion.line
          x1="55" y1="235" x2="30" y2="250"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.9 }}
        />
        
        {/* Lower right main branch */}
        <motion.line
          x1="100" y1="280" x2="155" y2="220"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/80"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
        />
        {/* Lower right twig 1 */}
        <motion.line
          x1="135" y1="245" x2="165" y2="215"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.95 }}
        />
        {/* Lower right twig 2 */}
        <motion.line
          x1="145" y1="235" x2="170" y2="250"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
        />
        
        {/* === MIDDLE BRANCHES === */}
        {/* Middle left main branch */}
        <motion.line
          x1="100" y1="220" x2="50" y2="160"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/80"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.05 }}
        />
        {/* Middle left twig 1 */}
        <motion.line
          x1="68" y1="185" x2="40" y2="155"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.15 }}
        />
        {/* Middle left twig 2 */}
        <motion.line
          x1="60" y1="175" x2="35" y2="185"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.2 }}
        />
        
        {/* Middle right main branch */}
        <motion.line
          x1="100" y1="220" x2="150" y2="160"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/80"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />
        {/* Middle right twig 1 */}
        <motion.line
          x1="132" y1="185" x2="160" y2="155"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.25 }}
        />
        {/* Middle right twig 2 */}
        <motion.line
          x1="140" y1="175" x2="165" y2="185"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.3 }}
        />
        
        {/* === UPPER BRANCHES === */}
        {/* Upper left main branch */}
        <motion.line
          x1="100" y1="170" x2="55" y2="105"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.35 }}
        />
        {/* Upper left twig */}
        <motion.line
          x1="70" y1="130" x2="45" y2="100"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.45 }}
        />
        
        {/* Upper right main branch */}
        <motion.line
          x1="100" y1="170" x2="145" y2="105"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        {/* Upper right twig */}
        <motion.line
          x1="130" y1="130" x2="155" y2="100"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
        
        {/* === TOP BRANCHES === */}
        {/* Top left branch */}
        <motion.line
          x1="100" y1="140" x2="70" y2="70"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.55 }}
        />
        {/* Top left twig */}
        <motion.line
          x1="80" y1="95" x2="60" y2="65"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.65 }}
        />
        
        {/* Top right branch */}
        <motion.line
          x1="100" y1="140" x2="130" y2="70"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/75"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        {/* Top right twig */}
        <motion.line
          x1="120" y1="95" x2="140" y2="65"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1.7 }}
        />
        
        {/* === CROWN BRANCHES === */}
        {/* Crown left */}
        <motion.line
          x1="100" y1="120" x2="75" y2="50"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.75 }}
        />
        {/* Crown right */}
        <motion.line
          x1="100" y1="120" x2="125" y2="50"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/70"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.8 }}
        />
      </svg>

      {/* Hero icons positioned on the tree */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-80 md:w-64 md:h-96 lg:w-80 lg:h-[450px]">
          {heroes.map((hero, index) => {
            const positions = getHeroPosition(index, heroes.length, isReversed)
            return (
              <motion.div
                key={hero.id}
                className="absolute"
                style={{ 
                  left: `${positions.x}%`, 
                  top: `${positions.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 1.5 + index * 0.15
                }}
              >
                <HeroIcon hero={hero} onClick={() => onHeroClick(hero)} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

function getHeroPosition(index: number, total: number, isReversed: boolean): { x: number; y: number } {
  // Positions matching the exact tree branch endpoints from reference
  const positions = [
    { x: 50, y: 12 },   // Top center - crown
    { x: 30, y: 16 },   // Crown left branch end
    { x: 70, y: 16 },   // Crown right branch end
    { x: 22, y: 26 },   // Upper left branch end
    { x: 78, y: 26 },   // Upper right branch end
    { x: 20, y: 40 },   // Middle left branch end
    { x: 80, y: 40 },   // Middle right branch end
    { x: 18, y: 55 },   // Lower left branch end
    { x: 82, y: 55 },   // Lower right branch end
  ]
  
  const pos = positions[index % positions.length]
  
  if (isReversed && index > 0) {
    return { x: 100 - pos.x, y: pos.y }
  }
  
  return pos
}
