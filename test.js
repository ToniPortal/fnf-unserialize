const fnf = require("./index.js");

//Create the json from the game and return it(it parsed into js object);
console.log(fnf.create(`${process.env.APPDATA}/ninjamuffin99/Funkin/ninjamuffin99`));

console.log("\n") // For have a <br> in console

// Read the json created(it parsed into js object);
var r = fnf.read();

//And here you see all the song normally !(The json change verigy before !)
console.log(r.songScores.h["Tutorial-easy"]);
