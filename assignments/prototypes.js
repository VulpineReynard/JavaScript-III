/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(gameStuff) {
  this.createdAt = gameStuff.createdAt;
  this.name = gameStuff.name;
  this.dimensions = gameStuff.dimensions;
}

GameObject.prototype.destroy = function() {
  return this.name + " was removed from the game.";
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(charAttributes) {
  GameObject.call(this, charAttributes);
  this.healthPoints = charAttributes.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return this.name + " took damage.";
}

CharacterStats.prototype.attack = function(target) {
  this.attackDmg = Math.floor((Math.random() * 50) + 1);
  if(this.healthPoints > 0 && target.healthPoints > 0)
  console.log(this.name + " attacks " + target.name + " with " + this.weapons + " for " + this.attackDmg + " points of damage.");

  if (this.healthPoints <= 0) {
    return this.name + " cannot attack, it is dead."
  } else if (target.healthPoints <= 0) {
    return this.name + " beats up " + target.name + "'s dead body."
  } else {
    target.healthPoints = target.healthPoints - this.attackDmg;
    if (target.healthPoints <= 0 )
    return this.name + " has killed " + target.name + "!";
    
    else
    return target.name + " is still alive with " + target.healthPoints + " health points left"
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(humAttributes) {
  CharacterStats.call(this, humAttributes);
  this.team = humAttributes.team;
  this.weapons = humAttributes.weapons;
  this.language = humAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return this.name + " offers a greeting in " + this.language;
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });


  function Villian(villStats) {
    CharacterStats.call(this, villStats);
    this.name = villStats.name;
    this.healthPoints = villStats.healthPoints;
    this.weapons = villStats.weapons;
    this.language = villStats.language;
    this.attackDmg = villStats.attackDmg;
    this.remainingHealth = villStats.remainingHealth;
  }

  Villian.prototype = Object.create(Humanoid.prototype);
  
  const javascript = new Villian({
    name: 'Javascript',
    healthPoints: 100,
    weapons: 'Demoralization',
    language: 'idfk',
    attackDmg: Math.floor((Math.random() * 50) + 1),
    remainingHealth: 100
  });
  
  
  
  function Hero(heroStats) {
    CharacterStats.call(this, heroStats);
    this.name = heroStats.name;
    this.healthPoints = heroStats.healthPoints;
    this.weapons = heroStats.weapons;
    this.remainingHealth = heroStats.remainingHealth;
    this.attackDmg = heroStats.attackDmg;
  }

  Hero.prototype = Object.create(Humanoid.prototype);
  
  const web21 = new Hero({
    name: 'Web21',
    healthPoints: 100,
    weapons: 'Josh Knell',
    attackDmg: Math.floor((Math.random() * 50) + 1),
    remainingHealth: 100
  });




  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // STRETCH
  console.log(web21.attack(javascript));
  console.log(javascript.attack(web21));
  console.log(web21.attack(javascript));
  console.log(javascript.attack(web21));
  console.log(web21.attack(javascript));
  console.log(javascript.attack(web21));
  console.log(web21.attack(javascript));
  console.log(javascript.attack(web21));

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

