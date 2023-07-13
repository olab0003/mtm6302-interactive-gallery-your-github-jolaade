const images = [
    { src: '/image/Capture-dog-1.PNG', alt: 'dog Image 1', caption: "This was the first dog I drew when I was first learning how to draw dog Heads. " },
    { src: '/image/Capture-dog-2.PNG', alt: 'dog Image 2', caption: "This was my second time trying to draw dog, I was trying to build upon the last dog." },
    { src: '/image/Capture-dog-3.PNG', alt: 'dog Image 3', caption: "This one is my pride and joy. I put a lot of effort into making this one, I took my time and elegantly gave it all I had." },
];
  
const gallery = document.querySelector('.gallery');

  // create a gallery item
  function createGalleryItem(image) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
  
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.dataset.caption = image.caption;
  
    galleryItem.appendChild(img);
    gallery.appendChild(galleryItem);
}
  
  // Create gallery items
images.forEach((image) => createGalleryItem(image));
  
  // the click events on the gallery
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const overlay = document.getElementById('image-overlay');
      const overlayImage = document.getElementById('overlay-image');
      const overlayCaption = document.getElementById('overlay-caption');
  
      overlayImage.src = event.target.src;
      overlayCaption.textContent = event.target.dataset.caption;
  
      overlay.style.display = 'flex';
    }
});
  
  // the click events for the overlay
document.getElementById('image-overlay').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const overlay = document.getElementById('image-overlay');
      overlay.style.display = 'none';
    }
});
  