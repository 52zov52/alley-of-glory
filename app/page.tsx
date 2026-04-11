"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GloryTree } from "@/components/glory-tree"
import { HeroModal } from "@/components/hero-modal"
import { heroesData, getHeroGroups, type Hero } from "@/lib/heroes-data"
import { Star, ChevronDown } from "lucide-react"

export default function HomePage() {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null)
  const heroGroups = getHeroGroups(heroesData, 4)

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Emblem */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 
                            flex items-center justify-center shadow-2xl shadow-primary/30 border-4 border-primary/30">
              <Star className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground fill-primary-foreground" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance tracking-tight"
          >
            Аллея Славы
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-primary font-medium mb-6"
          >
            Герои Военных Операций
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Мемориальный сайт в честь героев, отдавших свои жизни за Родину. 
            Их подвиги навсегда останутся в наших сердцах.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{heroesData.length}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Героев</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{heroGroups.length}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Деревьев Славы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">&infin;</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Память</div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator - moved outside content div */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm uppercase tracking-wider">Листайте вниз</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </header>

      {/* Motto Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground italic mb-6 text-balance">
              &quot;Никто не забыт, ничто не забыто&quot;
            </p>
            <footer className="text-muted-foreground">
              — Девиз Аллеи Славы
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Glory Trees Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Деревья Славы
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Нажмите на звезду героя, чтобы узнать его историю
            </p>
          </motion.div>

          {/* Trees grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 justify-items-center">
            {heroGroups.map((group, index) => (
              <GloryTree
                key={index}
                heroes={group}
                treeIndex={index}
                onHeroClick={setSelectedHero}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Вечная память героям
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Каждый герой на этой Аллее Славы — это история невероятного мужества и 
              самопожертвования. Они отдали самое ценное — свои жизни — ради защиты 
              Родины и её граждан. Мы помним каждого из них и храним память об их 
              подвигах для будущих поколений.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 rounded-full bg-secondary border border-border/50">
                Помним
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary border border-border/50">
                Гордимся
              </span>
              <span className="px-4 py-2 rounded-full bg-secondary border border-border/50">
                Чтим
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Аллея Славы &copy; {new Date().getFullYear()}. Вечная память героям.
          </p>
        </div>
      </footer>

      {/* Hero Modal */}
      <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
    </div>
  )
}
