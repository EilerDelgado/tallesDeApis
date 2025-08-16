window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('app').innerHTML = `
        <div class="container mt-5">
            <h2 class="mb-4">Galería de Imágenes</h2>
            <div id="imagesContainer" class="row"></div>
        </div>
        <style>
            .card {
                height: 350px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .card-img-top {
                height: 200px;
                object-fit: cover;
            }
        </style>
    `;

    const imagesContainer = document.getElementById('imagesContainer');
    const url = 'https://api.pexels.com/v1/search?query=comida&per_page=15&page=1';

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: 'dHBLHjOSXQMfJStq9GzFlQfDBiJFFzi3aX0EliDlKg5ZUfsFZCPmqXmc'
            }
        });

        const data = await response.json();

        // Mostrar las imágenes
        data.photos.forEach(photo => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-3';
            col.innerHTML = `
                <div class="card">
                    <img src="${photo.src.medium}" class="card-img-top" alt="${photo.photographer}">
                    <div class="card-body">
                        <p class="card-title">Foto tomada por:</p>
                        <h5 class="card-title">${photo.photographer}</h5>
                    </div>
                </div>
            `;
            imagesContainer.appendChild(col);
        });

    } catch (error) {
        console.error(error);
        imagesContainer.innerHTML = '<div class="alert alert-danger">Error al cargar imágenes desde Pexels.</div>';
    }
});
