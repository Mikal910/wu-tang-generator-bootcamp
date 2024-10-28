// Array of adjectives and nouns
const adj = [
    "Mystic", "Killer","Furious", "Silent", "Iron", "Raging", "Ghostly", 
    "Wicked", "Dynamic", "Savage", "Golden", "Fearless", "Mysterious"
];
const ns = [
    "Assassin","Warrior", "Monk", "Ninja", "Warrior", "Tiger", "Samurai", 
    "Dragon", "Shaolin", "Crane", "Bandit", "Master", "Shadow"
];

// Function to generate a Wu-Tang Clan name
function generateWuTangName() {
    const adjective = adj[Math.floor(Math.random() * adj.length)];
    const noun = ns[Math.floor(Math.random() * ns.length)];
    return `${adjective} ${noun}`;
}

// Event listener for the button
document.getElementById("g-btn").addEventListener("click", () => {
    const name = generateWuTangName();
    document.getElementById("wu-tang-name").textContent = name;
});