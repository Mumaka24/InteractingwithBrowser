import { fetchRandomDogImage } from './utils/api.js';
import { DogImage } from './components/DogImage.js';

async function loadRandomDogImage() {
  const app = document.getElementById('app');
  app.innerHTML = '<p>Loading...</p>';
  try {
    const imageUrl = await fetchRandomDogImage();
    app.innerHTML = '';
    app.appendChild(DogImage(imageUrl));
  } catch (error) {
    app.innerHTML = '<p>Failed to load image. Please try again.</p>';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');
  button.textContent = 'Fetch Random Dog Image';
  button.addEventListener('click', loadRandomDogImage);
  app.appendChild(button);
});
