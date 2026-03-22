/*
  ================================================================
  FILE: app/components/Header.jsx
  PURPOSE: Fixed top navbar — glassmorphism on scroll
  ================================================================

  WHAT THIS COMPONENT DOES:
  1. Sits fixed at top of every page
  2. Transparent at top — blurs + darkens as user scrolls
  3. Left: hamburger button → opens dropdown menu below it
  4. Center: brand logo
  5. Right: search bar that expands on click

  ✏️ CHANGE LOGO TEXT → find "VOGUE NOIR" below and replace
  ✏️ ADD NAV LINKS    → add <a> tags inside the drop menu ul
  ✏️ CHANGE SCROLL TRIGGER → find scrollY > 50 and change 50
  ✏️ CHANGE SEARCH WIDTH   → find searchOpen width style below

  'use client' is required — this component uses browser APIs
  (scroll events, click events) which only work in the browser
  ================================================================
*/

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Header() {

  /*
    STATE: scrolled
    false = header is transparent (user is at top of page)
    true  = header has glass blur (user has scrolled down)
    ✏️ Trigger point is controlled in useEffect below
  */
  const [scrolled, setScrolled]       = useState(false)

  /*
    STATE: menuOpen
    false = dropdown is hidden
    true  = dropdown is visible below hamburger
    ✏️ Dropdown items are in the <ul> in the return() below
  */
  const [menuOpen, setMenuOpen]       = useState(false)

  /*
    STATE: searchOpen
    false = search bar is narrow (icon only)
    true  = search bar expands to show input
  */
  const [searchOpen, setSearchOpen]   = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  /*
    REF: dropRef
    Points to the dropdown div so we can detect clicks outside it
    If user clicks anywhere outside dropdown → it closes
    ✏️ Do not remove this — removing breaks click-outside-to-close
  */
  const dropRef = useRef(null)

  /* ── SCROLL LISTENER ──────────────────────────────────────────
     Runs once when component mounts (empty [] dependency array)
     Watches window scroll — if past 50px, sets scrolled = true
     ✏️ Change 50 to any number to adjust when glass kicks in
  ────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    /* cleanup: removes listener when component unmounts
       prevents memory leaks — do not remove this return */
  }, [])

  /* ── CLICK OUTSIDE LISTENER ───────────────────────────────────
     Watches all clicks on the page
     If the click is NOT inside the dropdown → close dropdown
     ✏️ Do not change this — it handles click-outside-to-close
  ────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  /* ── SEARCH HANDLER ───────────────────────────────────────────
     Called when user presses Enter in search input
     ✏️ REPLACE the console.log with your real search logic
     e.g. router.push(`/search?q=${query}`) to go to search page
  ────────────────────────────────────────────────────────────── */
  const handleSearch = (e) => {
    if (e.key === 'Escape') {
      setSearchOpen(false)
      setSearchQuery('')
    }
    if (e.key === 'Enter' && searchQuery.trim()) {
      /* ✏️ ADD YOUR SEARCH LOGIC HERE */
      console.log('Search for:', searchQuery)
    }
  }

  /* ── STYLES ───────────────────────────────────────────────────
     Inline styles used here so component is self-contained
     ✏️ You can move these to a .module.css file if you prefer
  ────────────────────────────────────────────────────────────── */
  const styles = {
    header: {
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 'var(--header-height)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      /* scrolled state switches background and blur on/off */
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
      transition: 'background 0.4s ease, border-bottom 0.4s ease',
    },
    logo: {
      /* centered absolutely so it stays center regardless of left/right content */
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-display)',
      fontSize: '1.6rem',
      fontWeight: 600,
      letterSpacing: '0.3em',
      color: 'var(--brand-light)',
      textTransform: 'uppercase',
    },
    hamburgerWrap: {
      position: 'relative', /* anchor for dropdown position */
    },
    hamburgerBtn: {
      width: 40, height: 40,
      borderRadius: '50%',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(10px)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--brand-light)',
      transition: 'background 0.2s, transform 0.2s',
    },
    /* ── DROPDOWN BOX ─────────────────────────────────────────
       Glass card that appears below hamburger on click
       ✏️ Change width to make card wider/narrower
       ✏️ Change borderRadius to adjust corner roundness
    ──────────────────────────────────────────────────────── */
    dropMenu: {
      position: 'absolute',
      top: 'calc(100% + 14px)',
      left: 0,
      width: 240,
      background: 'rgba(18,16,14,0.85)',
      backdropFilter: 'blur(28px)',
      WebkitBackdropFilter: 'blur(28px)',
      border: '1px solid rgba(255,255,255,0.18)',
      borderRadius: 20,
      boxShadow: '0 12px 48px rgba(0,0,0,0.55)',
      padding: '10px 0',
      zIndex: 2000,
      /* animation: opacity + slide controlled by menuOpen state */
      opacity: menuOpen ? 1 : 0,
      pointerEvents: menuOpen ? 'all' : 'none',
      transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
      transformOrigin: 'top left',
      transition: 'opacity 0.22s ease, transform 0.22s ease',
    },
    dropLink: {
      display: 'block',
      padding: '13px 26px',
      fontFamily: 'var(--font-body)',
      fontSize: '0.78rem',
      letterSpacing: '0.08em',
      color: 'rgba(245,240,235,0.85)',
      borderRadius: 10,
      margin: '2px 8px',
      transition: 'background 0.15s, color 0.15s',
      cursor: 'pointer',
    },
    divider: {
      height: 1,
      background: 'rgba(255,255,255,0.08)',
      margin: '6px 18px',
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    },
    searchWrap: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 30,
      overflow: 'hidden',
      /* expands when searchOpen is true */
      width: searchOpen ? 200 : 36,
      transition: 'width 0.4s ease',
      backdropFilter: 'blur(10px)',
    },
    searchBtn: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 10px',
      color: 'var(--brand-light)',
      flexShrink: 0,
      lineHeight: 1,
      display: 'flex',
    },
    searchInput: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--brand-light)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      padding: '0 12px',
      width: '100%',
      opacity: searchOpen ? 1 : 0,
      transition: 'opacity 0.3s 0.1s',
    },
  }

  return (
    <header style={styles.header}>

      {/* ── LEFT: Hamburger + Dropdown ───────────────────────── */}
      <div style={styles.hamburgerWrap} ref={dropRef}>

        {/* Hamburger button — click toggles dropdown */}
        <button
          style={styles.hamburgerBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        {/* Dropdown menu card */}
        <div style={styles.dropMenu}>
          {/*
            ✏️ ADD MENU ITEMS: copy a <Link> block and change href + text
            ✏️ ADD DIVIDER:    paste <div style={styles.divider} />
            ✏️ REMOVE ITEM:    delete the <Link> block
          */}
          <Link href="#" style={styles.dropLink}>Caps &amp; Bags</Link>
          <Link href="#" style={styles.dropLink}>Summer</Link>
          <div style={styles.divider} />
          <Link href="#arrivals" style={styles.dropLink}>New Arrivals</Link>
          <Link href="#" style={styles.dropLink}>Guess Man</Link>
          <Link href="#" style={styles.dropLink}>Guess Woman</Link>
          <div style={styles.divider} />
          <Link href="#" style={styles.dropLink}>Login</Link>
          {/* ✏️ ADD MORE ITEMS BELOW HERE */}
        </div>

      </div>

      {/* ── CENTER: Logo ─────────────────────────────────────── */}
      {/* ✏️ Replace "VOGUE NOIR" with your brand name */}
      {/* ✏️ Or replace <span> with <img src="/logo.png"> */}
      <Link href="/" style={styles.logo}>
        VOGUE NOIR
      </Link>

      {/* ── RIGHT: Search bar ────────────────────────────────── */}
      <div style={styles.headerRight}>
        <div style={styles.searchWrap}>
          <button
            style={styles.searchBtn}
            onClick={() => {
              setSearchOpen(!searchOpen)
              if (searchOpen) setSearchQuery('')
            }}
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            style={styles.searchInput}
          />
        </div>
      </div>

    </header>
  )
}
