import camelcase from "camelcase";
import { powerPlopPathUtils } from "../../../../utils/pathUtils.js";
import { soTemplatePathUtils } from "@single_ops/templates/utils/pathUtils.js";
import { regexUtils } from "@single_ops/so_template_utils";

export default {
  description: "Create the boilerplate for a new custom Plop action",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of your custom plop action?",
    },
    {
      type: "confirm",
      name: "isAsync",
      message: "Will this action be async?",
      default: false,
    },
  ],

  actions: (answers) => {
    let actions = [];
    const name = camelcase(answers.name);
    const isAsync = answers.isAsync;
    const generatorName = "newPlopAction";

    //add asyncronous action file to folder
    actions.push({
      type: "add",
      path: soTemplatePathUtils.actionPath(name),
      templateFile: powerPlopPathUtils.generatorTemplatePath(
        generatorName,
        "asyncActionBoilerplate"
      ),
      skip: () => {
        if (!isAsync) {
          return "Skipped in favor of sync template";
        }
      },
    });

    //add syncronous action file to folder
    actions.push({
      type: "add",
      path: soTemplatePathUtils.actionPath(name),
      templateFile: powerPlopPathUtils.generatorTemplatePath(
        generatorName,
        "actionBoilerplate"
      ),
      skip: () => {
        if (isAsync) {
          return "Skipped in favor of async template";
        }
      },
    });

    //add import to action index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.actionsIndexPath(),
      pattern: regexUtils.indexImportRegex,
      template: regexUtils.IndexImportPrint("action", name),
    });

    //add export item to action index file
    actions.push({
      type: "modify",
      path: soTemplatePathUtils.actionsIndexPath(),
      pattern: regexUtils.indexExportRegex,
      template: regexUtils.indexExportPrint(name),
    });

    return actions;
  },
};
