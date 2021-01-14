# json-schema-faker-cli

Provides a CLI for [json-schema-faker](https://www.npmjs.com/package/json-schema-faker, https://github.com/json-schema-faker/json-schema-faker).

This repo is forked from https://github.com/oprogramador/json-schema-faker-cli to address the following issues:
* provide user-friendly error handling and usage message on invalid command-line input
* add command-line options corresponding to the various options offered by the underling json-schema-faker library

## install

`npm install -g npm install liquidaty/json-schema-faker-cli`

## usage

### generating single object from the schema
`generate-json schema.json output.json`

- `schema.json` - file containing JSON schema
- `output.json` - generated file according to the provided schema

### generating array of multiple objects
`generate-json schema.json output.json $ITEMS_LENGTH`

- `ITEMS_LENGTH` - number of objects in the array

### usage message
*  generate-json # outputs error message and usage message

### from stdin / to stdout, or with other options
*  generate-json --alwaysFakeOptionals < my.schema.json > my-fake.json # saves to my-fake.json
*  generate-json --notAValidOption my.schema.json # outputs error message and usage message

Options are described at https://github.com/json-schema-faker/json-schema-faker/tree/master/docs#available-options
