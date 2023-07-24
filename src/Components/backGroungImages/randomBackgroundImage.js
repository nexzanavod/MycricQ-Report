import backgroundImage1 from './1.png';
import backgroundImage2 from './2.png';
import backgroundImage3 from './3.png';
import backgroundImage4 from './4.png';
import backgroundImage5 from './5.png';

const backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3,backgroundImage4,backgroundImage5];

export function getRandomBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
}