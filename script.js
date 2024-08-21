const games = [
    { name: "The Legend of Zelda: Breath of the Wild", type: "adventure", rating: 10 },
    { name: "Minecraft", type: "simulation", rating: 9 },
    { name: "Fortnite", type: "action", rating: 8 },
    { name: "Overwatch", type: "action", rating: 9 },
    { name: "Among Us", type: "strategy", rating: 7 },
    { name: "Red Dead Redemption 2", type: "adventure", rating: 10 },
    { name: "Apex Legends", type: "action", rating: 8 },
    { name: "Cyberpunk 2077", type: "rpg", rating: 7 },
    { name: "Genshin Impact", type: "rpg", rating: 8 },
    { name: "Hades", type: "rpg", rating: 9 },
    { name: "Hollow Knight", type: "adventure", rating: 9 },
    { name: "Super Mario Odyssey", type: "adventure", rating: 10 },
    { name: "The Witcher 3: Wild Hunt", type: "rpg", rating: 10 },
    { name: "Animal Crossing: New Horizons", type: "simulation", rating: 9 },
    { name: "League of Legends", type: "strategy", rating: 8 }
];

function suggestGame() {
    const gameType = document.getElementById("game-type").value;
    const minRating = document.getElementById("rating").value;

    let filteredGames = games.filter(game => {
        return (gameType === "all" || game.type === gameType) && game.rating >= minRating;
    });

    if (filteredGames.length === 0) {
        document.getElementById("suggestion").innerText = "No games found matching your criteria.";
    } else {
        const randomIndex = Math.floor(Math.random() * filteredGames.length);
        const suggestion = filteredGames[randomIndex].name;
        document.getElementById("suggestion").innerText = `We suggest: ${suggestion}`;
    }
}