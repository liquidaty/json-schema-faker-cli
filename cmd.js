#!/usr/bin/env node
const generate = require('./app/generate');

// supported options and their default values
const supportedOptions = {
  failOnInvalidTypes: true,
  defaultInvalidTypeProduct: null,
  defaultMinItems: 0,
  defaultRandExpMax: 10,
  alwaysFakeOptionals: false,
  ignoreProperties: [],
  ignoreMissingRefs: false,
  failOnInvalidFormat: true,
  alwaysFakeOptionals: false,
  optionalsProbability: false,
  fixedProbabilities: false,
  useExamplesValue: false,
  useDefaultValue: false,
  requiredOnly: false,
  minItems: 0,
  maxItems: null,
  minLength: 0,
  maxLength: null,
  refDepthMin: 0,
  refDepthMax: 3,
  resolveJsonPath: false,
  reuseProperties: false,
  fillProperties: true,
  random: Math.random,
  replaceEmptyByRandomValue: false
};

const optionUsage = Object.keys(supportedOptions).map(function(optName) {
  return '  --' + optName + '=' + JSON.stringify(supportedOptions[optName]);
});

const usage = [
  'Example:', '  ' + process.argv[1] + ' --alwaysFakeOptionals[=true] schema.json [output.json]',
  'Options and default values:'
].concat(optionUsage).join('\n') + '\n';

var options = {};
var files = [];
for(var i = 2; i < process.argv.length; i++) {
  var arg = process.argv[i];
  if(!arg.startsWith('--'))
    files.push(arg);
  else {
    var parts = arg.slice(2).split('=');
    var optName = parts[0];
    var optValue = parts[1];
    var showUsage = false;
    if(optName == 'help')
      showUsage = true;
    else if(!(optName in supportedOptions)) {
      console.error('Option ' + optName + ' not recognized');
      showUsage = true;
    }

    if(showUsage) {
      console.log(usage);
      return;
    }

    if(!optValue)
      options[optName] = true;
    else {
      try {
        options[optName] = JSON.parse(optValue);
      } catch(e) {
        options[optName] = optValue;
      }
    }
  }
}

if(!files[0])
  console.error('Input schema file not provided\n' + usage);
else
  generate(files[0], files[1], files[2], options);
