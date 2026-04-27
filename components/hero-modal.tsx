"use client"

import { motion, AnimatePresence } from "framer-motion"
import type { Hero } from "@/lib/heroes-data"
import { X, Award, Calendar, MapPin, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"

interface HeroModalProps {
  hero: Hero | null
  onClose: () => void
}

export function HeroModal({ hero, onClose }: HeroModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  return (
    <AnimatePresence>
      {hero && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2
                       md:w-[90vw] md:max-w-3xl md:max-h-[85vh] overflow-auto
                       bg-card border border-border rounded-xl shadow-2xl z-50"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-background/50 hover:bg-background/80"
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                {/* Hero emblem */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 
                                  flex items-center justify-center border-4 border-primary/30 shadow-lg shadow-primary/20">
                    <Award className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
                  </div>
                </div>

                {/* Hero info */}
                <div className="flex-1 text-center md:text-left">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {hero.name}
                  </motion.h2>
                  
                  <motion.div 
                    className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm text-muted-foreground mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-primary" />
                      {hero.title}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {hero.years}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {hero.location}
                    </span>
                  </motion.div>

                  {/* Rank badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {hero.rank}
                    </span>
                    <span className="text-sm font-medium text-foreground">{hero.rankTitle}</span>
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">Биография</h3>
                <p className="text-muted-foreground leading-relaxed">{hero.description}</p>
              </motion.div>

              {/* Video section */}
              {hero.videoLocalPath && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">Обращение героя</h3>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-lg">
                    <video
                      ref={videoRef}
                      src={hero.videoLocalPath}
                      className="w-full h-full"
                      poster={hero.posterUrl || "/video-poster.jpg"}
                      onEnded={handleVideoEnded}
                      onClick={toggleVideo}
                      playsInline
                    />
                    {!isPlaying && (
                      <button
                        onClick={toggleVideo}
                        className="absolute inset-0 flex items-center justify-center bg-background/30 
                                   hover:bg-background/40 transition-colors group"
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center
                                        group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </button>
                    )}
                    {isPlaying && (
                      <button
                        onClick={toggleVideo}
                        className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-background/80 
                                   hover:bg-background/90 flex items-center justify-center transition-colors shadow-lg"
                      >
                        <Pause className="w-6 h-6 text-foreground" />
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Нажмите на видео для паузы/воспроизведения
                  </p>
                </motion.div>
              )}

              {/* Awards */}
              {hero.awards && hero.awards.length > 0 && (
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">Награды</h3>
                  <div className="flex flex-wrap gap-2">
                    {hero.awards.map((award, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm
                                   border border-border/50"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Quote */}
              {hero.quote && (
                <motion.blockquote 
                  className="mt-6 p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-foreground italic">&quot;{hero.quote}&quot;</p>
                </motion.blockquote>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}