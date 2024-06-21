

const dropDown = document.getElementById("breed-search");
const imageContainer = document.getElementsByClassName('imageContainer');
console.log(imageContainer)






dropDown.addEventListener("change", (event)=>{
    fetchBreedImages(event.target.value)
})

function fetchAllBreeds() {
    const apiUrl = 'https://api.thedogapi.com/v1/breeds';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 

        data.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            dropDown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching dog breeds:', error);
        alert('Error fetching dog breeds. Please try again later.');
    });
}

function fetchBreedImages(id) {
    const apiUrl = `https://api.thedogapi.com/v1/images/search?breed_ids=${id}&limit=10`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 

        
        
     // imageContainer.innerHTML = ''; 

        data.forEach(image => {
            const img = document.createElement('img');
            img.src = image.url;
            img.alt = 'Dog Image';
            imageContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error fetching breed images:', error);
        alert('Error fetching breed images. Please try again later.');
    });
}





 

async function fetchDogImages() {
    const apiUrl = 'https://api.thedogapi.com/v1/images/search?limit=10'; // Endpoint to fetch dog images

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); 
        
   
        
        data.forEach(image => {
            const img = document.createElement('img');
            img.src = image.url; 
            img.alt = 'Dog Image'; 
            imageContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching dog images:', error);
    }
}

fetchAllBreeds();
