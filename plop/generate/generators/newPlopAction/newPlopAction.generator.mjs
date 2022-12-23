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

  actions: (data) => {
    let actions = [];
    let name = `{{name}}`;
    const newPathSegment = `${name}/${name}`;
    const newActionPath = `plop/actions/${newPathSegment}.action.mjs`;
    const indexPath = "plop/actions/index.mjs";

    if (data.isAsync) {
      actions.push({
        type: "add",
        path: newActionPath,
        templateFile:
          "plop/generators/newPlopAction/asyncActionBoilerplate.template.mjs.hbs",
      });
    } else {
      actions.push({
        type: "add",
        path: newActionPath,
        templateFile:
          "plop/generators/newPlopAction/actionBoilerplate.template.mjs.hbs",
      });
    }

    actions.push({
      type: "append",
      path: indexPath,
      pattern: /;(?=\n\n)/gm,
      template: `import ${name} from "./${newPathSegment}.action.mjs";`,
    });

    actions.push({
      type: "append",
      path: indexPath,
      pattern: /,(?=\n})/gm,
      template: `\t${name},`,
    });

    return actions;
  },
};
