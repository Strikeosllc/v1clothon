/*
  ================================================================
  FILE: app/page.jsx
  PURPOSE: Homepage — exact conversion of your index.html
  ================================================================

  SECTION MAP (Ctrl+F to jump):
  1. [IMPORTS]       → components and data
  2. [SCROLL REVEAL] → fade-in on scroll logic
  3. [HERO]          → full screen video section
  4. [ARRIVALS]      → 10 product cards grid
  5. [ABOUT]         → transparent about section
  6. [FOOTER]        → bottom bar

  This is a SERVER COMPONENT (no 'use client' at top)
  Header and ProductCard are client components (have interactions)
  This page just renders structure — fast load, good for SEO
  ================================================================
*/

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ScrollReveal from './components/ScrollReveal'
import { products } from '../data/products'

export default function HomePage() {

  const styles = {

    /* ── HERO VIDEO SECTION ────────────────────────────────────
       Full screen video with centered CTA button
       ✏️ CHANGE VIDEO: edit <source src=""> in hero section below
       ✏️ CHANGE TAGLINE: find "Wear The" text below
       ✏️ CHANGE BUTTON TEXT: find "Explore Collection" below
    ────────────────────────────────────────────────────────── */
    hero: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroVideo: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.6) 100%)',
      zIndex: 1,
      /* ✏️ Adjust rgba values to darken or lighten video overlay */
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
    },
    heroSub: {
      fontSize: '0.7rem',
      letterSpacing: '0.4em',
      textTransform: 'uppercase',
      opacity: 0.6,
      /* ✏️ Change text below in JSX */
    },
    heroTagline: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 300,
      letterSpacing: '0.15em',
      lineHeight: 1.1,
      /* ✏️ Change text below in JSX */
    },
    heroBtn: {
      display: 'inline-block',
      padding: '14px 42px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--brand-light)',
      background: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.35)',
      backdropFilter: 'blur(10px)',
      borderRadius: 2,
      marginTop: 10,
      cursor: 'pointer',
      textDecoration: 'none',
      /* ✏️ href="#arrivals" scrolls down to products section */
    },

    /* ── NEW ARRIVALS SECTION ──────────────────────────────────
       Product grid — renders from data/products.js
       ✏️ To change grid columns → edit gridTemplateColumns below
       ✏️ To show more products → edit .slice(0,10) in JSX below
    ────────────────────────────────────────────────────────── */
    arrivals: {
      padding: '100px 60px',
      background: 'var(--brand-dark)',
    },
    sectionHeading: {
      textAlign: 'center',
      marginBottom: 60,
    },
    headingH2: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
      fontWeight: 300,
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
    },
    headingSpan: {
      display: 'block',
      fontSize: '0.65rem',
      letterSpacing: '0.4em',
      color: 'var(--brand-gold)',
      textTransform: 'uppercase',
      marginTop: 8,
      opacity: 0.8,
      /* ✏️ Change subtitle text below in JSX */
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',  /* ✏️ change 5 to any number */
      gap: 24,
      maxWidth: 1400,
      margin: '0 auto',
    },

    /* ── ABOUT SECTION ─────────────────────────────────────────
       Transparent glass-style section at bottom
       ✏️ Replace paragraph text below
       ✏️ Replace img-placeholder with real <img> tag
       ✏️ Add payment logos inside paymentRow div
    ────────────────────────────────────────────────────────── */
    about: {
      padding: '100px 60px',
      background: 'rgba(255,255,255,0.03)',
      backdropFilter: 'blur(6px)',
      borderTop: '1px solid var(--glass-border)',
    },
    aboutInner: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center',
    },
    aboutH3: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
      fontWeight: 300,
      letterSpacing: '0.1em',
      marginBottom: 20,
    },
    aboutP: {
      fontSize: '0.8rem',
      lineHeight: 1.9,
      opacity: 0.65,
      maxWidth: 480,
    },
    paymentRow: {
      marginTop: 36,
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
    },
    paymentSlot: {
      width: 54, height: 34,
      background: 'rgba(255,255,255,0.06)',
      border: '1px dashed rgba(255,255,255,0.12)',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.5rem',
      color: 'rgba(255,255,255,0.2)',
      letterSpacing: '0.1em',
      /* ✏️ Replace with <img src="visa.svg"> inside each slot */
    },
    imgPlaceholder: {
      width: '100%',
      aspectRatio: '4/5',
      background: 'rgba(255,255,255,0.04)',
      border: '1px dashed rgba(255,255,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.2)',
      fontSize: '0.65rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      /* ✏️ Replace this div with <img src="your-photo.jpg"> */
    },

    /* ── FOOTER BAR ────────────────────────────────────────────
       ✏️ Change copyright text below in JSX
    ────────────────────────────────────────────────────────── */
    footerBar: {
      padding: '24px 60px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.65rem',
      letterSpacing: '0.15em',
      opacity: 0.4,
      textTransform: 'uppercase',
    },
  }

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────
          Imported from components/Header.jsx
          To edit header → open that file
      ───────────────────────────────────────────────────────── */}
      <Header />

      {/* ── HERO VIDEO SECTION ─────────────────────────────────
          ✏️ Replace src="" with your video file path
          ✏️ Keep muted autoplay loop — required for browsers
          ✏️ Change tagline text
          ✏️ Change button href to any section id
      ───────────────────────────────────────────────────────── */}
      <section style={styles.hero}>
        <video
          style={styles.heroVideo}
          autoPlay muted loop playsInline
        >
          {/* ✏️ ADD YOUR VIDEO: <source src="/video/hero.mp4" type="video/mp4" /> */}
          <source src="" type="video/mp4" />
        </video>

        <div style={styles.heroOverlay} />

        <div style={styles.heroContent}>
          {/* ✏️ CHANGE SEASON TEXT */}
          <p style={styles.heroSub}>Spring / Summer 2026</p>

          {/* ✏️ CHANGE TAGLINE */}
          <h1 style={styles.heroTagline}>
            Wear The<br />Dark Beautiful
          </h1>

          {/* ✏️ CHANGE BUTTON TEXT or href */}
          <a href="#arrivals" style={styles.heroBtn}>
            Explore Collection
          </a>
        </div>
      </section>

      {/* ── NEW ARRIVALS ────────────────────────────────────────
          Products come from data/products.js
          .slice(0, 10) shows first 10 — ✏️ change 10 to show more
          To edit products → open data/products.js
      ───────────────────────────────────────────────────────── */}
      <section style={styles.arrivals} id="arrivals">
        <div style={styles.sectionHeading} className="reveal">
          {/* ✏️ CHANGE HEADING TEXT */}
          <h2 style={styles.headingH2}>New Arrivals</h2>
          {/* ✏️ CHANGE SUBTITLE */}
          <span style={styles.headingSpan}>SS26 Collection — Just Landed</span>
        </div>

        <div style={styles.productGrid}>
          {products.slice(0, 10).map((product) => (
            /*
              Each ProductCard gets a product object passed in
              key= is required by React — uses product.id
              ✏️ Change slice(0, 10) to show more products
            */
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── ABOUT SECTION ───────────────────────────────────────
          ✏️ CHANGE heading text
          ✏️ CHANGE paragraph text — your brand story
          ✏️ REPLACE imgPlaceholder div with real <img>
          ✏️ REPLACE payment slot divs with real logo <img> tags
      ───────────────────────────────────────────────────────── */}
      <section style={styles.about} id="about">
        <div style={styles.aboutInner}>

          <div className="reveal">
            {/* ✏️ YOUR BRAND HEADING */}
            <h3 style={styles.aboutH3}>About Our Brand</h3>

            {/* ✏️ YOUR BRAND STORY — paragraph 1 */}
            <p style={styles.aboutP}>
              We are a collective of designers obsessed with the tension between
              darkness and elegance. Every piece is considered. Every silhouette
              deliberate. Born in 2024, designed for those who move through the
              world without apology.
            </p>

            {/* ✏️ YOUR BRAND STORY — paragraph 2 */}
            <p style={{ ...styles.aboutP, marginTop: 16 }}>
              Add your second paragraph about craftsmanship, materials, or
              values here.
            </p>

            {/* Payment logos row — ✏️ replace slots with real logos */}
            <div style={styles.paymentRow}>
              <div style={styles.paymentSlot}>Visa</div>
              <div style={styles.paymentSlot}>MC</div>
              <div style={styles.paymentSlot}>PP</div>
              <div style={styles.paymentSlot}>+</div>
              {/* ✏️ Replace each div with: <img src="/icons/visa.svg" alt="Visa" /> */}
            </div>
          </div>

          {/* ✏️ REPLACE with: <img src="/images/brand-photo.jpg" alt="Brand" style={{width:'100%', aspectRatio:'4/5', objectFit:'cover'}} /> */}
          <div style={styles.imgPlaceholder} className="reveal">
            [ YOUR BRAND IMAGE HERE ]
          </div>

        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────
          ✏️ CHANGE brand name and year
      ───────────────────────────────────────────────────────── */}
      <div style={styles.footerBar}>
        <span>© 2026 Vogue Noir</span>      {/* ✏️ change brand name */}
        <span>All rights reserved</span>
      </div>

      {/* ScrollReveal runs the fade-in animation on scroll */}
      <ScrollReveal />
    </>
  )
}
