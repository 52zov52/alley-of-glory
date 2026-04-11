"use client"

import Image from "next/image"
import type { Hero } from "@/lib/heroes-data"
import { HeroIcon } from "./hero-icon"

interface GloryTreeProps {
  heroes: Hero[]
  treeIndex: number
  onHeroClick: (hero: Hero) => void
}

export function GloryTree({ heroes, treeIndex, onHeroClick }: GloryTreeProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto py-4">
      {/* Картинка дерева */}
      <div className="relative w-full" style={{ paddingBottom: "137.5%" }}> {/* Соотношение сторон 400x550 */}
        <Image
          src="/tree.png"
          alt="Дерево Славы"
          fill
          className="object-contain"
          priority={treeIndex === 0} // Загружаем первое дерево быстрее
        />
      </div>
      
      {/* Звёзды - при клике переход на страницу героя */}
      <div className="absolute inset-0">
        {heroes.map((hero, index) => {
          const positions = getHeroPosition(index, heroes.length)
          return (
            <div
              key={hero.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
              style={{ 
                left: `${positions.x}%`, 
                top: `${positions.y}%`,
                zIndex: 10 // Звёзды поверх дерева
              }}
              onClick={() => onHeroClick(hero)}
            >
              <HeroIcon hero={hero} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function getHeroPosition(index: number, total: number): { x: number; y: number } {
  const positions = [
    { x: 51.4, y: 28 },
    { x: 37.2, y: 33 },
    { x: 65.6, y: 33 },
    { x: 30, y: 40 },
    { x: 70, y: 45 },
    { x: 35, y: 52 },
    { x: 65, y: 52 },
    { x: 42, y: 65 },
    { x: 58, y: 65 },
    { x: 45, y: 78 },
    { x: 55, y: 78 },
    { x: 50, y: 88 },
  ]
  return positions[index % positions.length]
}