const _ = require('lodash');
const jsonfile = require('jsonfile');

function generate(inputPath, outputPath, itemsLength, options) {
  var faker = require('json-schema-faker');
  
  if(inputPath == '-') // for input, use stdin instead of file
    inputPath = '/dev/stdin';

  const inputObject = jsonfile.readFileSync(inputPath);
  if(options)
    faker.option(options);

  const output = itemsLength === undefined
    ? faker(inputObject)
    : _.times(itemsLength, () => faker(inputObject));

  if(!outputPath)
    console.log(JSON.stringify(output));
  else
    jsonfile.writeFileSync(outputPath, output);
}

module.exports = generate;
