"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { heroesData, type Hero } from "@/lib/heroes-data"
import { ArrowLeft, Award, Calendar, MapPin, Star, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroPage() {
  const params = useParams()
  const router = useRouter()
  const hero = heroesData.find((h) => h.id === params.id)

  if (!hero) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-foreground mb-4">Герой не найден</h1>
        <Button onClick={() => router.push("/")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться на главную
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Верхняя панель с кнопкой "Назад" */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-7 h-7 text-primary" />
          </Button>
          <span className="text-sm text-muted-foreground">Аллея Славы</span>
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-10"
          >
            {/* Эмблема героя */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary to-primary/60 
                              flex items-center justify-center border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <Award className="w-14 h-14 md:w-18 md:h-18 text-primary-foreground" />
              </div>
            </div>

            {/* Информация */}
            <div className="flex-1 text-center md:text-left">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {hero.name}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-primary font-medium mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {hero.title}
              </motion.p>

              <motion.div 
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-primary" />
                  {hero.rankTitle}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {hero.years}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {hero.location}
                </span>
              </motion.div>

              {/* Ранг */}
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {hero.rank}
                </span>
                <span className="text-sm font-medium text-foreground">{hero.rankTitle}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Описание подвига */}
          <motion.div 
            className="mb-10 p-6 md:p-8 rounded-xl bg-secondary/30 border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Подвиг
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{hero.description}</p>
          </motion.div>

          {/* Видео обращение */}
          {(hero.videoLocalPath || hero.videoUrl) && (
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Обращение героя
              </h2>
              
              {hero.videoLocalPath ? (
                /* Локальное видео */
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50 shadow-lg border border-border/50">
                  <video
                    src={hero.videoLocalPath}
                    className="w-full h-full object-contain"
                    poster={hero.posterUrl}
                    controls
                    playsInline
                  />
                </div>
              ) : hero.videoUrl && hero.videoUrl.includes("youtube") ? (
                /* YouTube видео */
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50 shadow-lg border border-border/50">
                  <iframe
                    src={hero.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null}
            </motion.div>
          )}

          {/* Награды */}
          {hero.awards && hero.awards.length > 0 && (
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Награды</h2>
              <div className="flex flex-wrap gap-3">
                {hero.awards.map((award, index) => (
                  <span 
                    key={index}
                    className="px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium
                               border border-primary/30 hover:bg-primary/20 transition-colors"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Цитата */}
          {hero.quote && (
            <motion.blockquote 
              className="p-6 md:p-8 rounded-xl bg-primary/5 border-l-4 border-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-foreground italic font-medium">
                &quot;{hero.quote}&quot;
              </p>
            </motion.blockquote>
          )}

          {/* Кнопка "Назад" внизу */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              size="lg"
              className="gap-2 px-8"
            >
              <ChevronLeft className="w-5 h-5" />
              Вернуться к Аллее Славы
            </Button>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Аллея Славы &copy; {new Date().getFullYear()}. Вечная память героям.
          </p>
        </div>
      </footer>
    </div>
  )
}