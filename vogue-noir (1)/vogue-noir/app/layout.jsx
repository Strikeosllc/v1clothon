/*
  ================================================================
  FILE: app/layout.jsx
  PURPOSE: Root wrapper — wraps every page on the site
  ================================================================

  WHAT THIS FILE DOES:
  - Sets the HTML <head> (title, meta tags)
  - Imports global CSS once for the whole site
  - Every page you create is rendered inside {children}

  ✏️ CHANGE SITE TITLE → edit the title field in metadata
  ✏️ CHANGE META DESCRIPTION → edit description field
  ✏️ ADD ANALYTICS → paste script tags before </body> here
  ================================================================
*/

import '../styles/globals.css'

export const metadata = {
  /* ✏️ USER EDIT: Change these to your brand details */
  title: 'VOGUE NOIR — Clothing',
  description: 'Luxury dark fashion — SS26 Collection',
}

export default function RootLayout({ children }) {
  /*
    FUNCTION: Wraps every page with the same HTML shell
    children = whatever page is currently loaded
    ✏️ Add a persistent cart drawer or cookie banner here later
  */
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
