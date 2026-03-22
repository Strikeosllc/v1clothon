/*
  ================================================================
  FILE: app/components/ProductCard.jsx
  PURPOSE: Single product card — image, name, price, hover badge
  ================================================================

  WHAT THIS COMPONENT DOES:
  - Renders one product card from the data passed in
  - Image zooms slightly on hover
  - "Quick Add" badge slides up on hover
  - onClick → currently logs to console
    ✏️ REPLACE console.log with: addToCart(product) when cart is ready

  PROPS (data passed in from parent):
    product.id     → unique id
    product.name   → product title
    product.price  → price string
    product.img    → image URL
    product.badge  → hover button text

  ✏️ TO CHANGE CARD SIZE → edit aspectRatio in imgWrap style
  ✏️ TO CHANGE HOVER COLOR → edit badgeStyle background rgba
  ================================================================
*/

'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({ product }) {

  /*
    STATE: hovered
    Tracks if mouse is over this card
    Controls zoom on image and badge slide-up
  */
  const [hovered, setHovered] = useState(false)

  const styles = {
    card: {
      cursor: 'pointer',
    },
    imgWrap: {
      position: 'relative',
      width: '100%',
      aspectRatio: '3/4',    /* ✏️ change to '1/1' for square, '4/3' for landscape */
      overflow: 'hidden',
      background: '#1a1714',
      marginBottom: 14,
    },
    img: {
      objectFit: 'cover',
      /* zoom on hover — controlled by hovered state */
      transform: hovered ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform 0.5s ease',
    },
    badge: {
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      background: 'rgba(10,10,10,0.8)',
      backdropFilter: 'blur(8px)',
      color: 'var(--brand-gold)',
      textAlign: 'center',
      fontSize: '0.65rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      padding: 10,
      /* slides up on hover */
      transform: hovered ? 'translateY(0)' : 'translateY(100%)',
      transition: 'transform 0.3s',
    },
    name: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.95rem',
      fontWeight: 400,
      letterSpacing: '0.05em',
      marginBottom: 4,
    },
    price: {
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      color: 'var(--brand-gold)',
    },
  }

  return (
    <div
      style={styles.card}
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        /*
          ✏️ REPLACE THIS with your cart or product page logic:
          Option A — add to cart:   addToCart(product)
          Option B — go to page:    router.push(`/product/${product.id}`)
        */
        console.log('Clicked product:', product.name)
      }}
    >
      <div style={styles.imgWrap}>
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes="(max-width: 900px) 50vw, 20vw"
          style={styles.img}
        />
        <div style={styles.badge}>{product.badge}</div>
      </div>
      <div style={styles.name}>{product.name}</div>
      <div style={styles.price}>{product.price}</div>
    </div>
  )
}
