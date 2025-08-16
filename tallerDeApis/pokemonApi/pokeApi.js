document.getElementById("searchButton").addEventListener("click", searchPokemon);

document.querySelectorAll(".pokemon-item").forEach((item) => {
    item.addEventListener("click", () => {
        document.getElementById("pokemonName").value = item.textContent;
        searchPokemon();
    });
});

async function searchPokemon() {
    const pokemonName = document
        .getElementById("pokemonName")
        .value.toLowerCase();
    const pokemonCard = document.getElementById("pokemonCard");
    const errorMessage = document.getElementById("errorMessage");

    try {
        // Llamada a la API de PokeAPI
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!response.ok) throw new Error("Pokémon no encontrado");
        const data = await response.json();

        // Mostrar la información del Pokémon
        document.getElementById("pokemonImage").src =
            data.sprites.front_default;
        document.getElementById("pokemonTitle").textContent =
            data.name.toUpperCase();
        document.getElementById("pokemonAbilities").textContent = data.abilities
            .map((ability) => ability.ability.name)
            .join(", ");

        pokemonCard.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    } catch (error) {
        // Mostrar mensaje de error
        pokemonCard.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
}
