const helperName = '{{camelCase name}}'
const newPathSegment = `${helperName}/${helperName}`

export default {
  description: "Generate a new helper for use with handlebars templates",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of your helper?",
    },
  ],
  actions: [
    {
      type: "add",
      path: `plop/helpers/${newPathSegment}.helper.mjs`,
      templateFile: "plop/generators/newPlopHelper/newPlopHelper.template.hbs",
    },
    {
      type: "modify",
      path: "plop/helpers/index.mjs",
      pattern: /(import.*)(?=\n*export)/g,
      template: `$1\nimport ${helperName} from "./${newPathSegment}.helper.mjs";`,
    },
    {
      type: "modify",
      path: "plop/helpers/index.mjs",
      pattern: /^\s*(\w*(?=\n}))$/gm,
      template: `\t$1,\n\t${helperName}`,
    },
  ],
};