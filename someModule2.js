var settingsManager = require("./SettingsManager.js");

var someModule2 = function someModule2 () {
  settingsManager.set("hairColour", "blonde");
};
module.exports = someModule2;