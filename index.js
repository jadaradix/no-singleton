var someModule1 = require("./someModule1.js");
var someModule2 = require("./someModule2.js");

someModule1();
someModule2();

var settingsManager = require("./SettingsManager.js");
console.log(settingsManager.toString());