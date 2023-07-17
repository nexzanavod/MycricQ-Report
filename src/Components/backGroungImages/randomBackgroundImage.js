import backgroundImage1 from './backimage1.png';
import backgroundImage2 from './backimage2.png';
import backgroundImage3 from './backimage3.png';

const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3];

export function getRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
}