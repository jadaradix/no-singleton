var settingsManager = require("./SettingsManager.js");

var someModule1 = function someModule1 () {
  settingsManager.set("name", "James");
  settingsManager.set("age", "18");
};
module.exports = someModule1;