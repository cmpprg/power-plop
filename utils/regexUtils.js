const indexExportRegex = /(.*\w*,(?=\n*}))/gm;
const indexImportRegex = /(\W*import.*)(?=\n*export)/g;
const partialSubIndexImportRegex = /(\);)(?=\n*export)/

const indexExportPrint = (name) => `$1\n\t${name},`;

const IndexImportPrint = (fileType, name) =>
  `$1\nimport ${name} from "./${name}/${name}.${fileType}.js";`;

const partialSubIndexImportPrint = (partialFileName) =>
  `$1\n{{> ${partialFileName} }}`

const partialIndexImportPrint = (generatorName) =>
  `$1\nimport ${generatorName}Partials from "./${generatorName}/index.js";`

const partialIndexExportPrint = (generatorName) =>
  `$1\n\t...${generatorName}Partials,`

export default {
  indexExportRegex,
  indexExportPrint,
  indexImportRegex,
  IndexImportPrint,
  partialSubIndexImportRegex,
  partialSubIndexImportPrint,
  partialIndexImportPrint,
  partialIndexExportPrint,
};
