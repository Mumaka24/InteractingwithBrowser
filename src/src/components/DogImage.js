export function DogImage(imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    return img;
  }