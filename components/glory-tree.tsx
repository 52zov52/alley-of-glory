"use client"

import type { Hero } from "@/lib/heroes-data"
import { HeroIcon } from "./hero-icon"

interface GloryTreeProps {
  heroes: Hero[]
  treeIndex: number
  onHeroClick: (hero: Hero) => void
}

export function GloryTree({ heroes, treeIndex, onHeroClick }: GloryTreeProps) {
  // Координаты звёзд на дереве (в процентах от размера контейнера)
  // Подгоняем под ваше изображение
  const positions = [
    { x: 51.4, y: 18 },  // Верхушка
    { x: 37.2, y: 23 },  // Левая верхняя ветка
    { x: 65.6, y: 23 },  // Правая верхняя ветка
    { x: 30, y: 35 },  // Левая средняя ветка
    { x: 70, y: 35 },  // Правая средняя ветка
    { x: 35, y: 48 },  // Левая нижняя ветка
    { x: 65, y: 48 },  // Правая нижняя ветка
    { x: 42, y: 60 },  // Левая ветка ниже
    { x: 59, y: 60 },  // Правая ветка ниже
    { x: 45, y: 72 },  // Левая у ствола
    { x: 55, y: 72 },  // Правая у ствола
    // ... добавьте сколько нужно
  ]

  return (
    <div className="relative w-[500px] mx-auto">
      {/* Картинка дерева */}
      <img 
        src="/tree.png" 
        alt="Дерево Славы" 
        className="w-full h-auto"
      />
      
      {/* Звёзды поверх дерева */}
      <div className="absolute inset-0">
        {heroes.map((hero, index) => {
          const pos = positions[index % positions.length]
          return (
            <div
              key={hero.id}
              className="absolute"
              style={{ 
                left: `${pos.x}%`, 
                top: `${pos.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <HeroIcon 
                hero={hero} 
                onClick={() => onHeroClick(hero)} 
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}