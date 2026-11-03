const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const ghibliImagePath = path.join(__dirname, 'public', 'couple-ghibli.jpg');
  
  // Resize & crop couple artwork to fit the right arch (510x566)
  const coupleImage = await sharp(ghibliImagePath)
    .resize(510, 566, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 95 })
    .toBuffer();

  const coupleImageBase64 = coupleImage.toString('base64');

  const svgOverlay = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffdfa"/>
          <stop offset="45%" stop-color="#fdf6ec"/>
          <stop offset="100%" stop-color="#f5e7d3"/>
        </linearGradient>

        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#8a5e18"/>
          <stop offset="30%" stop-color="#d4af37"/>
          <stop offset="60%" stop-color="#f5db8b"/>
          <stop offset="80%" stop-color="#d4af37"/>
          <stop offset="100%" stop-color="#8a5e18"/>
        </linearGradient>

        <linearGradient id="wineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#3d121e"/>
          <stop offset="100%" stop-color="#5a1a2b"/>
        </linearGradient>

        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#3d121e" flood-opacity="0.22"/>
        </filter>

        <clipPath id="archClip">
          <rect x="640" y="32" width="510" height="566" rx="28" ry="28" />
        </clipPath>
      </defs>

      <!-- Background with warm silk paper gradient -->
      <rect width="1200" height="630" fill="url(#bgGrad)"/>

      <!-- Outer Dual Gold Borders -->
      <rect x="18" y="18" width="1164" height="594" rx="18" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" opacity="0.75"/>
      <rect x="26" y="26" width="1148" height="578" rx="14" fill="none" stroke="#b58b1a" stroke-width="1" stroke-dasharray="6,4" opacity="0.45"/>

      <!-- Corner Ornaments -->
      <g fill="#b58b1a" opacity="0.85">
        <circle cx="36" cy="36" r="4.5"/>
        <circle cx="1164" cy="36" r="4.5"/>
        <circle cx="36" cy="594" r="4.5"/>
        <circle cx="1164" cy="594" r="4.5"/>
      </g>

      <!-- Right Side: Gilded Framed Couple Portrait -->
      <rect x="636" y="28" width="518" height="574" rx="32" fill="none" stroke="url(#goldGrad)" stroke-width="5" filter="url(#shadow)"/>
      <image href="data:image/jpeg;base64,${coupleImageBase64}" x="640" y="32" width="510" height="566" preserveAspectRatio="xMidYMid slice" clip-path="url(#archClip)"/>
      
      <!-- Inner Border on Image -->
      <rect x="640" y="32" width="510" height="566" rx="28" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" opacity="0.8"/>

      <!-- Bottom overlay on picture for elegance -->
      <rect x="640" y="520" width="510" height="78" rx="0" fill="url(#wineGrad)" opacity="0.88" clip-path="url(#archClip)"/>
      <text x="895" y="566" font-family="Georgia, serif" font-size="20" fill="#fef3c7" font-weight="bold" text-anchor="middle" letter-spacing="3">GURJAS &amp; SHUBHPREET</text>

      <!-- Left Side Invitation Content -->
      <g transform="translate(68, 60)">
        <!-- Sacred Ek Onkar Badge -->
        <circle cx="245" cy="32" r="30" fill="#fffdf8" stroke="url(#goldGrad)" stroke-width="2" filter="url(#shadow)"/>
        <text x="245" y="44" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#b58b1a" text-anchor="middle">ੴ</text>

        <!-- Families Blessing -->
        <text x="245" y="96" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" letter-spacing="5" fill="#7d634b" font-weight="600" text-anchor="middle">TOGETHER WITH OUR FAMILIES</text>

        <!-- Decorative Divider -->
        <line x1="135" y1="116" x2="355" y2="116" stroke="url(#goldGrad)" stroke-width="1.5"/>
        <text x="245" y="120" font-family="serif" font-size="14" fill="#b58b1a" text-anchor="middle">✦ ✦ ✦</text>

        <!-- Couple Big Names -->
        <text x="245" y="190" font-family="'Brush Script MT', 'Great Vibes', Georgia, cursive, serif" font-size="62" fill="#3d121e" font-weight="normal" text-anchor="middle">Gurjas &amp; Shubhpreet</text>

        <!-- Invitation Tagline -->
        <text x="245" y="235" font-family="Georgia, serif" font-size="18" font-style="italic" fill="#66503c" text-anchor="middle">invite you to celebrate their sacred wedding</text>

        <!-- Date Pill Badge -->
        <rect x="45" y="270" width="400" height="54" rx="27" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="2" filter="url(#shadow)"/>
        <text x="245" y="304" font-family="Georgia, serif" font-size="17" font-weight="bold" letter-spacing="3" fill="#3d121e" text-anchor="middle">SATURDAY · 12 DECEMBER 2026</text>

        <!-- Venue & Destination -->
        <text x="245" y="362" font-family="Georgia, serif" font-size="19" font-weight="bold" fill="#3d121e" text-anchor="middle">96-F, SBS Nagar, Pakhowal Road</text>
        <text x="245" y="388" font-family="'Segoe UI', sans-serif" font-size="13" letter-spacing="3" fill="#7a624d" font-weight="600" text-anchor="middle">LUDHIANA, PUNJAB</text>

        <!-- View Invitation CTA -->
        <rect x="110" y="420" width="270" height="42" rx="21" fill="url(#wineGrad)" filter="url(#shadow)"/>
        <rect x="112" y="422" width="266" height="38" rx="19" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.6"/>
        <text x="245" y="446" font-family="'Segoe UI', sans-serif" font-size="12" font-weight="bold" letter-spacing="3" fill="#fbf5eb" text-anchor="middle">OPEN INVITATION →</text>
      </g>
    </svg>
  `);

  // Output lossless compressed PNG
  await sharp(svgOverlay)
    .png({
      compressionLevel: 9, // Lossless maximum compression
      adaptiveFiltering: true,
    })
    .toFile(path.join(__dirname, 'public', 'og-image.png'));

  console.log('Successfully generated lossless compressed public/og-image.png');
}

createOgImage().catch(console.error);
