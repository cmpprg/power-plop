const newPathSegment = "new{{pascalCase name}}/new{{pascalCase name}}";

export default {
  description: "Create the boilerplate for a new Plop generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message:
        "What will your new generator generate? (name = 'new<YourAnswer>')",
    },
  ],
  actions: [
    {
      type: "add",
      path: `plop/generators/${newPathSegment}.generator.mjs`,
      templateFile:
        "plop/generators/newPlopGenerator/generatorBoilerplate.template.hbs",
    },
    {
      type: "add",
      path: `plop/generators/${newPathSegment}.template.hbs`,
      templateFile:
        "plop/generators/newPlopGenerator/templateBoilerplate.template.hbs",
    },
    {
      type: "modify",
      path: "plop/generators/index.mjs",
      pattern: /(import.*)(?=\n*export)/g,
      template: `$1\nimport new{{pascalCase name}} from "./${newPathSegment}.generator.mjs";`,
    },
    {
      type: "modify",
      path: "plop/generators/index.mjs",
      pattern: /^\s*(\w*(?=\n}))$/gm,
      template: "\t$1,\n\tnew{{pascalCase name}}",
    },
  ],
};
