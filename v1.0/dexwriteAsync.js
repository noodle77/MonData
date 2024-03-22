const fs = require("fs").promises;

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
  }

  async loadData() {
    try {
      this.baseStats = await import(`./baseStats/${this.name}/stats.json`);
      this.breedingData = await import(`./breedingData/${this.name}/breeding.json`);
    } catch (error) {
      console.error(`Failed to load data for ${this.name}:`, error);
    }
  }

  typeEffect() {
  /*  Takes type1 and type2 from the instance, compares it to an internal type effectiveness chart (json?),
      and it returns that pokemon's strengths and weaknesses based on its typing.  */
  }
}

async function loadPokemon() {
  const monData = await fs.readFile("./monData/monData.json", "utf-8");
  const natDex = [];

  for (const data of monData) {
    const pokemon = new Pokemon(...data);
    await pokemon.loadData();
    natDex.push(pokemon);
  }

  return natDex;
}

loadPokemon().then((natDex) => {
  module.exports = natDex;
});
