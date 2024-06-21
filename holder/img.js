// gallery.js - Module for handling gallery of dog images
let currentPosition = 0;
let images = [];

export function setImages(img) {
   images = img;
}

export function initializeGallery() {
   const galleryDiv = document.getElementById("gallery");
   galleryDiv.innerHTML = ""; // Clear existing images
   currentPosition = 0;
   loadImages();
}

export async function loadImagesByBreed(breed) {
   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
   const data = await response.json();
   setImages(data.message);
   initializeGallery();
}

async function loadImages() {
   const galleryDiv = document.getElementById("gallery");
   if (images.length > 0) {
      for (let i = currentPosition; i < currentPosition + 10; i++) {
         if (i >= images.length) break;
         const img = document.createElement("img");
         img.src = images[i];
         galleryDiv.appendChild(img);
      }
      currentPosition += 10;
   }
}