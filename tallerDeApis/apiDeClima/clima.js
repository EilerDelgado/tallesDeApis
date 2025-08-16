const apiKey = "edf239680c4f578336c4791e82e4b587";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerHTML = "Por favor, ingresa una ciudad.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Ciudad no encontrada");
        }

        const data = await response.json();
        const temp = data.main.temp;
        const description = data.weather[0].description;

        resultDiv.innerHTML = `
        <div class="col-md-6">
            <div class="card shadow">
                <div class="card-body text-center">
                    <h2 class="card-title">${data.name}</h2>
                        <p class="card-text fs-4">🌡️ Temperatura: <strong>${temp} °C</strong></p>
                        <p class="card-text text-capitalize">Descripción: ${description}</p>
                </div>
            </div>
        </div>
    `;
    } catch (error) {
        resultDiv.innerHTML = `
        <div class="col-md-6">
            <div class="alert alert-danger text-center">${error.message}</div>
        </div>
    `;
    }
}
