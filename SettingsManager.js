var settings = {};

var SettingsManager = {};

SettingsManager.set = function (name, value) {
  settings[name] = value;
};

SettingsManager.get = function (name) {
  return settings[name];
};

SettingsManager.toString = function () {
  return Object.keys(settings).map(function (settingName) {
    return settingName + " -> " + settings[settingName];
  }).join("\n");
};

module.exports = SettingsManager;