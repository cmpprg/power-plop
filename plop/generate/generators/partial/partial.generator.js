import { readdirSync, existsSync } from "node:fs";
import camelcase from "camelcase";
import { powerPlopPathUtils } from "../../../../utils/pathUtils.js";
import { soTemplatePathUtils } from "@single_ops/templates/utils/pathUtils.js";
import { regexUtils } from "@single_ops/so_template_utils";

const generatorList = () => {
  let generators = readdirSync(soTemplatePathUtils.generatorsDirPath());

  return generators.filter((generator) => generator !== "index.js");
};

export default {
  description: "Generate a partial for use in the generator templates",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of your partial?",
    },
    {
      type: "list",
      name: "generator",
      message: "What generator will this be used with?",
      choices: generatorList(),
    },
  ],
  actions: (answers) => {
    let actions = [];

    const generatorName = answers.generator;
    const partialName = camelcase(answers.name);
    const partialSubIndexExists = existsSync(
      soTemplatePathUtils.partialSubIndexPath(generatorName)
    );

    // create partial
    actions.push({
      type: "add",
      path: soTemplatePathUtils.partialTemplatePath(generatorName, partialName),
      templateFile: powerPlopPathUtils.generatorTemplatePath("partial", "partial"),
    });

    // create genrator named dir index if it doesn't already exist
    actions.push({
      type: "add",
      path: soTemplatePathUtils.partialSubIndexPath(generatorName),
      skipIfExists: true,
      templateFile: powerPlopPathUtils.generatorTemplatePath("partial", "partialIndex"),
    });

    //add file read to partial/generatorName dir index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.partialSubIndexPath(generatorName),
      pattern: regexUtils.partialSubIndexImportRegex,
      template: regexUtils.partialSubIndexImportPrint("readFileSyncDeclaration"),
      skip: () => {
        if (!partialSubIndexExists) {
          return "Already added info to index";
        }
      },
    });

    //add file to the export in generator named dir index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.partialSubIndexPath(generatorName),
      pattern: regexUtils.indexExportRegex,
      template: regexUtils.indexExportPrint(partialName),
      skip: () => {
        if (!partialSubIndexExists) {
          return "Already added info to index";
        }
      },
    });

    //add generator index to partials index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.partialIndexPath(),
      pattern: regexUtils.indexImportRegex,
      template: regexUtils.partialIndexImportPrint(generatorName),
      skip: () => {
        if (partialSubIndexExists) {
          return "Import already added";
        }
      },
    });

    //spread generator name to partials index export
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.partialIndexPath(),
      pattern: regexUtils.indexExportRegex,
      template: regexUtils.partialIndexExportPrint(generatorName),
      skip: () => {
        if (partialSubIndexExists) {
          return "Import already added";
        }
      },
    });

    return actions;
  },
};
