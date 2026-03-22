# VOGUE NOIR — Next.js Store

## Run on your Linux machine

```bash
# Step 1 — go into the folder
cd vogue-noir

# Step 2 — install dependencies (only once)
npm install

# Step 3 — start dev server
npm run dev
```

Open browser → http://localhost:3000

---

## Every file and what it does

| File | What to edit here |
|---|---|
| `data/products.js` | Add / remove / change products |
| `app/components/Header.jsx` | Logo, menu items, search |
| `app/components/ProductCard.jsx` | Card size, hover effects |
| `app/page.jsx` | Hero text, about text, layout |
| `app/styles/globals.css` | Brand colors, fonts |

---

## Common edits

**Change brand name:**
→ Open `app/components/Header.jsx`
→ Ctrl+F: `VOGUE NOIR`
→ Replace with your name

**Add a product:**
→ Open `data/products.js`
→ Copy any `{ }` block, paste at end of array, change values

**Add a menu item:**
→ Open `app/components/Header.jsx`
→ Ctrl+F: `ADD MORE ITEMS BELOW HERE`
→ Paste: `<Link href="#" style={styles.dropLink}>Your Item</Link>`

**Add hero video:**
→ Put your .mp4 in `/public/video/hero.mp4`
→ Open `app/page.jsx`
→ Ctrl+F: `ADD YOUR VIDEO`
→ Change src="" to `/video/hero.mp4`

**Change brand colors:**
→ Open `app/styles/globals.css`
→ Edit values under `:root { }`

---

## Build for production

```bash
npm run build
npm start
```
