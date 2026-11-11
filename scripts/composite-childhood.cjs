const sharp = require('sharp');
const path = require('path');

async function enhanceComposite() {
  const ghibliPath = path.join(__dirname, '..', 'public', 'ghibli-couple-transparent.png');
  const groomPath = path.join(__dirname, '..', 'public', 'groom-childhood.jpg');
  const bridePath = path.join(__dirname, '..', 'public', 'bride-childhood.jpg');
  const outPath = path.join(__dirname, '..', 'public', 'ghibli-couple-transparent.png');
  const previewPath = path.join(__dirname, '..', 'public', 'test-composited-enhanced.png');

  // Groom inner shadow overlay: 110x146
  const groomInnerShadow = Buffer.from(`
    <svg width="110" height="146" viewBox="0 0 110 146" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="110" height="146" fill="none" stroke="rgba(65,40,20,0.5)" stroke-width="2.5" />
      <rect x="1" y="1" width="108" height="144" fill="none" stroke="rgba(65,40,20,0.22)" stroke-width="1.5" />
    </svg>
  `);

  const groomBuf = await sharp(groomPath)
    .resize(110, 146, { fit: 'cover', position: 'top' })
    .composite([{ input: groomInnerShadow, top: 0, left: 0 }])
    .png()
    .toBuffer();

  // Bride inner shadow overlay: 111x150
  // Clean off the tiny top-right frame artifact on bride photo
  const brideClean = await sharp(bridePath)
    .extract({ left: 0, top: 22, width: 360, height: 363 })
    .resize(111, 150, { fit: 'cover', position: 'top' })
    .toBuffer();

  const brideInnerShadow = Buffer.from(`
    <svg width="111" height="150" viewBox="0 0 111 150" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="111" height="150" fill="none" stroke="rgba(70,45,20,0.45)" stroke-width="2.5" />
      <rect x="1" y="1" width="109" height="148" fill="none" stroke="rgba(70,45,20,0.2)" stroke-width="1.5" />
    </svg>
  `);

  const brideBuf = await sharp(brideClean)
    .composite([{ input: brideInnerShadow, top: 0, left: 0 }])
    .png()
    .toBuffer();

  // Backup original ghibli transparent if not yet backed up
  const backupPath = path.join(__dirname, '..', 'public', 'ghibli-couple-original.png');
  const fs = require('fs');
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(ghibliPath, backupPath);
  }

  // Composite onto the original ghibli image
  const compositedBuffer = await sharp(backupPath)
    .composite([
      { input: groomBuf, left: 217, top: 313 },
      { input: brideBuf, left: 589, top: 367 }
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  // Save to target ghibli-couple-transparent.png
  await sharp(compositedBuffer).toFile(outPath);

  // Extract a preview of the frame area
  await sharp(compositedBuffer)
    .extract({ left: 160, top: 240, width: 580, height: 350 })
    .toFile(previewPath);

  console.log('Successfully composited childhood photos into ghibli-couple-transparent.png');
}

enhanceComposite().catch(console.error);
