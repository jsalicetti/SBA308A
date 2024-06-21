// script.js

document.addEventListener('DOMContentLoaded', fetchImages);

async function fetchImages() {
    // Replace with your API endpoint URL that provides image URLs
    const apiUrl = 'https://api.example.com/images';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // For debugging purposes
        
        const imageContainer = document.getElementById('image-container');
        
        data.forEach(image => {
            const img = document.createElement('img');
            img.src = image.url; // Assuming 'url' is the key for image URLs in your API response
            img.alt = image.altText || 'Image'; // Optional alt text for accessibility
            imageContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
