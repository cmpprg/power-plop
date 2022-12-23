import camelcase from "camelcase";
import { buildTemplatePathUtils } from "@single_ops/so_build_templates/utils/pathUtils.js";
import { soTemplatePathUtils } from "@single_ops/templates/utils/pathUtils.js";
import { regexUtils } from "@single_ops/so_template_utils";

export default {
  description: "Generate a new helper for use with handlebars templates",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of your helper?",
    },
  ],

  actions: (answers) => {
    let actions = [];
    const name = camelcase(answers.name);

    //Add new helper file from template
    actions.push({
      type: "add",
      path: soTemplatePathUtils.helperPath(name),
      templateFile: buildTemplatePathUtils.generatorTemplatePath("newPlopHelper", "newPlopHelper"),
    });

    //Add import statement to helper index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.helpersIndexPath(),
      pattern: regexUtils.indexImportRegex,
      template: regexUtils.IndexImportPrint('helper', name),
    });

    //Add export item to helper index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.helpersIndexPath(),
      pattern: regexUtils.indexExportRegex,
      template: regexUtils.indexExportPrint(name),
    });

    return actions;
  },
};
