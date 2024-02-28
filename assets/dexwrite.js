// function Pokemon(dex, type) {
//     this.dex = dex;
//     this.type = type;
//     this.attack("It's Super Effective!");
// }

class Pokemon {
    constructor(name, natDex, type1, type2, species, height, weight, ability1, ability2, abilityHidden) {
        this.name = name;
        this.natDex = natDex;
        this.type1 = type1;
        this.type2 = type2;
        this.species = species;
        this.height = `${height} m`;
        this.weight = `${weight} kg`;
        this.ability1 = ability1;
        this.ability2 = ability2;
        this.abilityHidden = abilityHidden;
        this.baseStats = require(`./baseStats/${name}/stats.json`);
        this.breedingData = require(`./breedingData/${name}/breeding.json`);    
    };

    typeEffect() {
        /* Takes type1 and type2 from the instance, compares it to an internal type effectiveness chart (.json?), 
           and it returns that pokemon's strengths and weaknesses based on its typing  */
    };
}

const monData = [
     /* ["name", "natDex", "type1", "type2", "species", "height", "weight", "ability1", "ability2", "abilityHidden"], */
        ["dummy", "0000", null, null, null, null, null, null, null, null],
        ["Bulbasaur", "0001", "Grass", "Poison", "Seed Pokémon", "0.7", "6.9", "Overgrow", null, "Chlorophyll"],
        ["Ivysaur", "0002", "Grass", "Poison", "Seed Pokémon", "1.0", "13.0", "Overgrow", null, "Chlorophyll"],
        ["Venusaur", "0003", "Grass", "Poison", "Seed Pokémon", "2.0", "100.0", "Overgrow", null, "Chlorophyll"],
        ["Charmander", "0004", "Fire", null, "Lizard Pokémon", "0.6", "8.5", "Blaze", null, "Solar Power"],
        ["Charmeleon", "0005", "Fire", null, "Flame Pokémon", "1.1", "19.0", "Blaze", null, "Solar Power"],
        ["Charizard", "0006", "Fire", "Flying", "Flame Pokémon", "1.7", "90.5", "Blaze", null, "Solar Power"],
        ["Squirtle", "0007", "Water", null, "Tiny Turtle Pokémon", "0.5", "9.0", "Torrent", null, "Rain Dish"],
        ["Wartortle", "0008", "Water", null, "Turtle Pokémon", "1.0", "22.5", "Torrent", null, "Rain Dish"],
        ["Blastoise", "0009", "Water", null, "Shellfish Pokémon", "1.6", "85.5", "Torrent", null, "Rain Dish"],
        ["Caterpie", "0010", "Bug", null, "Worm Pokémon", "0.3", "2.9", "Shield Dust", null, "Run Away"],
        ["Metapod", "0011", "Bug", null, "Cocoon Pokémon", "0.7", "9.9", "Shed Skin", null, null],
        ["Butterfree", "0012", "Bug", "Flying", "Butterfly Pokémon", "1.1", "32.0", "Compound Eyes", null, "Tinted Lens"],
        ["Weedle", "0013", "Bug", "Poison", "Hairy Bug Pokémon", "0.3", "3.2", "Shield Dust", null, "Run Away"],
        ["Kakuna", "0014", "Bug", "Poison", "Cocoon Pokémon", "0.6", "10.0", "Shed Skin", null, null],
        ["Beedrill", "0015", "Bug", "Poison", "Poison Bee Pokémon", "1.0", "29.5", "Swarm", null, "Sniper"],
];

let natDex = [];

// let dummy = new Pokemon("name", "natDex", "type1", "type2", "species", "height", "weight", "ability1", "ability2", "abilityHidden");
// natDex.push(dummy);

monData.forEach(index => {
        let pokemon = new Pokemon(...index);
        natDex.push(pokemon);
});



module.exports = (natDex);