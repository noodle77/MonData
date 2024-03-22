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
  }
  
  typeEffect() {
    /* Takes type1 and type2 from the instance, compares it to an internal type effectiveness chart (json?),
    and it returns that pokemon's strengths and weaknesses based on its typing  */
  }
};

const monData = require("./monData/monData.json");
let natDex = [];

monData.forEach((index) => {
  let pokemon = new Pokemon(...index);
  natDex.push(pokemon);
});

module.exports = (natDex);