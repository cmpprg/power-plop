import camelcase from "camelcase";
import { buildTemplatePathUtils } from "@single_ops/so_build_templates/utils/pathUtils.js";
import { soTemplatePathUtils } from "@single_ops/templates/utils/pathUtils.js";
import { regexUtils } from "@single_ops/so_template_utils";

export default {
  description: "Create the boilerplate for a new Plop generator",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of your new generator?",
    },
  ],

  actions: (answers) => {
    let actions = [];
    const name = camelcase(answers.name);
    const generatorName = "newPlopGenerator";

    //add generator file
    actions.push({
      type: "add",
      path: soTemplatePathUtils.generatorPath(name),
      templateFile: buildTemplatePathUtils.generatorTemplatePath(
        generatorName,
        "generatorBoilerplate"
      ),
    });

    //add generator template file
    actions.push({
      type: "add",
      path: soTemplatePathUtils.generatorTemplatePath(name, name),
      templateFile: buildTemplatePathUtils.generatorTemplatePath(
        generatorName,
        "templateBoilerplate"
      ),
    });

    //add import statement to generator index
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.generatorsIndexPath(),
      pattern: regexUtils.indexImportRegex,
      template: regexUtils.IndexImportPrint('generator', name),
    });

    //add export item to generator index
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.generatorsIndexPath(),
      pattern: regexUtils.indexExportRegex,
      template: regexUtils.indexExportPrint(name),
    });

    return actions;
  },
};
