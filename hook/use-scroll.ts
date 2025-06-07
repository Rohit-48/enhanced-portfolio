"use client"

import { useEffect, useState } from "react"

interface ScrollPosition {
  x: number
  y: number
}

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    function updatePosition() {
      setScrollPosition({ x: window.pageXOffset, y: window.pageYOffset })
    }

    window.addEventListener("scroll", updatePosition)
    updatePosition()

    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPosition
}

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}
