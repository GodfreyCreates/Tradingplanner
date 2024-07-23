const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const generateBlurDataURL = async (imagePath) => {
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    const buffer = await image
      .resize({ width: 10, height: Math.round((metadata.height / metadata.width) * 10) })
      .toBuffer();

    const base64Image = `data:image/${metadata.format};base64,${buffer.toString('base64')}`;
    return base64Image;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    throw error;
  }
};

const processImages = async (directory) => {
  const blurDataURLs = {};
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const imagePath = path.join(directory, file);
    const blurDataURL = await generateBlurDataURL(imagePath);
    blurDataURLs[file] = blurDataURL;
  }

  const outputFilePath = path.join(directory, 'blurDataURLs.json');
  fs.writeFileSync(outputFilePath, JSON.stringify(blurDataURLs, null, 2));
  console.log(`Blur data URLs generated and saved to ${outputFilePath}`);
};

const directories = [
  path.resolve(__dirname, '../../public/elements'),
  path.resolve(__dirname, '../../public/images')
];

directories.forEach((directory) => processImages(directory));
