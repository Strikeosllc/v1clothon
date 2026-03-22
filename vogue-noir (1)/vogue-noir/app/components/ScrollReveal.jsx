/*
  ================================================================
  FILE: app/components/ScrollReveal.jsx
  PURPOSE: Watches scroll and fades in elements with class "reveal"
  ================================================================

  WHAT THIS DOES:
  - On page load + every scroll event, finds all .reveal elements
  - If element is in viewport → adds class "visible"
  - CSS in globals.css animates opacity 0→1 and slide up

  ✏️ CHANGE TRIGGER POINT → edit 0.9 (0=top, 1=bottom of screen)
  ✏️ CHANGE STAGGER SPEED → edit the 40 in setTimeout delay
  ✏️ CHANGE ANIMATION     → edit .reveal CSS in globals.css

  'use client' required — uses window and scroll events
  This component renders nothing visible — it just runs JS
  ================================================================
*/

'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {

  useEffect(() => {

    function revealOnScroll() {
      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        /*
          0.9 = element must be 90% into viewport before revealing
          ✏️ Lower number = reveals sooner (e.g. 0.7)
          ✏️ Higher number = reveals later (e.g. 1.0)
        */
        if (rect.top < window.innerHeight * 0.9) {
          setTimeout(() => {
            el.classList.add('visible')
          }, i * 40)
          /*
            i * 40 = stagger delay — each element waits 40ms more
            ✏️ Change 40 to 0 for no stagger, 100 for slower cascade
          */
        }
      })
    }

    /* Run once immediately for elements already visible on load */
    revealOnScroll()

    /* Run on every scroll event */
    window.addEventListener('scroll', revealOnScroll)

    /* Cleanup — removes listener when component unmounts */
    return () => window.removeEventListener('scroll', revealOnScroll)

  }, [])

  /* This component renders nothing — it only runs the effect */
  return null
}
