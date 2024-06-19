document.addEventListener('DOMContentLoaded', () => {
    const offersGrid = document.getElementById('offers-grid');
    const apiKey = '5f81482954a44a0ab6c21e41ecb14c96';
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=8`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const games = data.results;
            games.forEach(game => {
                const offer = document.createElement('div');
                offer.classList.add('offer');
                
                const offerImage = document.createElement('div');
                offerImage.classList.add('offer-image');
                
                const img = document.createElement('img');
                img.src = game.background_image;
                img.alt = game.name;
                offerImage.appendChild(img);
                
                const title = document.createElement('h3');
                title.textContent = game.name;
                
                const developer = document.createElement('p');
                developer.textContent = game.developers ? game.developers[0].name : 'Unknown Developer';
                
                const price = document.createElement('p');
                price.classList.add('price');
                price.textContent = 'Rp. 500.000';
                
                const discount = document.createElement('span');
                discount.classList.add('discount');
                discount.textContent = '30%';
                price.appendChild(discount);
                
                offer.appendChild(offerImage);
                offer.appendChild(title);
                offer.appendChild(developer);
                offer.appendChild(price);
                
                offersGrid.appendChild(offer);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
