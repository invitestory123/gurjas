const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const ekOnkarPath = path.join(__dirname, 'public', 'ek-onkar-gold.png');

  // Load Ek Onkar gold medallion
  const ekOnkarBuf = await sharp(ekOnkarPath)
    .resize(96, 96, { fit: 'contain' })
    .png()
    .toBuffer();
  const ekOnkarBase64 = ekOnkarBuf.toString('base64');

  const svgOverlay = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffdf8"/>
          <stop offset="45%" stop-color="#fdf6ec"/>
          <stop offset="100%" stop-color="#f5e8d5"/>
        </linearGradient>

        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8a5e18"/>
          <stop offset="25%" stop-color="#d4af37"/>
          <stop offset="50%" stop-color="#fae7ab"/>
          <stop offset="75%" stop-color="#d4af37"/>
          <stop offset="100%" stop-color="#8a5e18"/>
        </linearGradient>

        <linearGradient id="wineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3d121e"/>
          <stop offset="100%" stop-color="#5a1a2b"/>
        </linearGradient>

        <radialGradient id="sunburst" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#fcedd0" stop-opacity="0.6"/>
          <stop offset="60%" stop-color="#fcf5e8" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#f5e8d5" stop-opacity="0"/>
        </radialGradient>

        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#3d121e" flood-opacity="0.18"/>
        </filter>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#d4af37" flood-opacity="0.45"/>
        </filter>
      </defs>

      <!-- Background with warm silk paper gradient -->
      <rect width="1200" height="630" fill="url(#bgGrad)"/>
      <rect width="1200" height="630" fill="url(#sunburst)"/>

      <!-- Outer Dual Gold Borders -->
      <rect x="22" y="22" width="1156" height="586" rx="20" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" opacity="0.85"/>
      <rect x="32" y="32" width="1136" height="566" rx="16" fill="none" stroke="#b58b1a" stroke-width="1.2" stroke-dasharray="6,4" opacity="0.45"/>

      <!-- Corner Ornaments -->
      <g fill="#b58b1a" opacity="0.85">
        <circle cx="44" cy="44" r="5"/>
        <circle cx="1156" cy="44" r="5"/>
        <circle cx="44" cy="586" r="5"/>
        <circle cx="1156" cy="586" r="5"/>
      </g>

      <!-- Sacred Ek Onkar Image Badge (Centered at X=600, Y=82) -->
      <circle cx="600" cy="82" r="48" fill="#fffdf8" stroke="url(#goldGrad)" stroke-width="2.5" filter="url(#glow)"/>
      <image href="data:image/png;base64,${ekOnkarBase64}" x="552" y="34" width="96" height="96" preserveAspectRatio="xMidYMid meet"/>

      <!-- Blessing Header -->
      <text x="600" y="162" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" letter-spacing="6" fill="#8c7052" font-weight="600" text-anchor="middle">TOGETHER WITH OUR FAMILIES</text>

      <!-- Decorative Divider -->
      <line x1="440" y1="180" x2="760" y2="180" stroke="url(#goldGrad)" stroke-width="1.5"/>
      <text x="600" y="184" font-family="serif" font-size="14" fill="#b58b1a" text-anchor="middle">✦ ✦ ✦</text>

      <!-- Couple Big Names (Centered & Prominent) -->
      <text x="600" y="262" font-family="'Brush Script MT', 'Great Vibes', Georgia, cursive, serif" font-size="78" fill="#3d121e" font-weight="normal" text-anchor="middle">Gurjas &amp; Shubhpreet</text>

      <!-- Invitation Tagline -->
      <text x="600" y="306" font-family="Georgia, serif" font-size="19" font-style="italic" fill="#66503c" text-anchor="middle">cordially invite you to celebrate their auspicious</text>

      <!-- Roka Ceremony Heading Badge -->
      <text x="600" y="356" font-family="Georgia, 'Marcellus', serif" font-size="34" font-weight="bold" letter-spacing="6" fill="#5c1324" text-anchor="middle">ROKA CEREMONY</text>

      <!-- Date Pill Badge -->
      <rect x="385" y="388" width="430" height="52" rx="26" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="2" filter="url(#shadow)"/>
      <text x="600" y="420" font-family="Georgia, serif" font-size="17" font-weight="bold" letter-spacing="3.5" fill="#3d121e" text-anchor="middle">SATURDAY · 12 DECEMBER 2026</text>

      <!-- Venue & Destination -->
      <text x="600" y="475" font-family="Georgia, serif" font-size="18" font-weight="bold" fill="#3d121e" text-anchor="middle">96-F, SBS Nagar, Pakhowal Road</text>
      <text x="600" y="498" font-family="'Segoe UI', sans-serif" font-size="13" letter-spacing="3" fill="#7a624d" font-weight="600" text-anchor="middle">LUDHIANA, PUNJAB</text>

      <!-- View Invitation CTA Button -->
      <rect x="470" y="528" width="260" height="42" rx="21" fill="url(#wineGrad)" filter="url(#shadow)"/>
      <rect x="472" y="530" width="256" height="38" rx="19" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.7"/>
      <text x="600" y="554" font-family="'Segoe UI', sans-serif" font-size="12" font-weight="bold" letter-spacing="3" fill="#fbf5eb" text-anchor="middle">OPEN INVITATION →</text>
    </svg>
  `);

  // Output lossless compressed PNG
  await sharp(svgOverlay)
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(path.join(__dirname, 'public', 'og-image.png'));

  console.log('Successfully generated public/og-image.png for Roka Ceremony without couple photo');
}

createOgImage().catch(console.error);
