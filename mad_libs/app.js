//MAD LIBS


function startMadlib() {
  // create words object with empty string properties
  const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
  };

  // prompt user for input and save to corresponding object property
  words.number = prompt("Enter a number:");
  words.adjective = prompt("Enter an adjective:");
  words.pluralNoun = prompt("Enter a plural noun:");
  words.adverb = prompt("Enter an adverb:");
  words.anotherAdjective = prompt("Enter another adjective:");

  // log words object to console to verify input
  console.log(words);

  // call createStory() function to display MadLib story
  createStory(words);
}

function createStory(words) {
  // interpolate values from words object into story
  const story = `Once upon a time a group of ${words.number} General Assembly graduates
    got together and made a startup called ${words.adjective} Technologies.
    Their goal was to create smart ${words.pluralNoun}.
    They approached the challenge ${words.adverb}
    which ultimately lead them to ${words.anotherAdjective} fame.`;

  // display story to user using alert()
  alert(story);
}

// call startMadlib() to begin the game
startMadlib();
createStory();
