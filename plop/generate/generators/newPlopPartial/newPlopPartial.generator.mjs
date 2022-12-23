import fs from "fs";

const generatorList = () => {
  let generators = fs.readdirSync("plop/generators");

  return generators.filter(generator => generator !== "index.mjs");
};

export default {
  description: "Generate a partial for use in the generator templates",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of your partial?"
    },
    {
      type: "list",
      name: "generator",
      message: "What generator will this be used with?",
      choices: generatorList()
    }
  ],
  actions: answers => {
    let actions = [];
    const generatorIndexPath = `plop/partials/${answers.generator}/index.mjs`;
    const generatorIndexExists = fs.existsSync(generatorIndexPath);
    const partialName = "{{camelCase name}}";
    const withGeneratorPathSegment = `{{generator}}/${partialName}`;
    const partialPathSegment =
      answers.generator === "None" ? partialName : withGeneratorPathSegment;

    // create partial
    actions.push({
      type: "add",
      path: `plop/partials/${partialPathSegment}.partial.hbs`,
      templateFile: "plop/generators/newPlopPartial/newPlopPartial.template.hbs"
    });

    // create genrator named dir index if it doesn't already exist
      actions.push({
        type: "add",
        path: generatorIndexPath,
        skipIfExists: true,
        templateFile: "plop/generators/newPlopPartial/partialIndex.template.hbs"
      });

      //add file read to generator named dir index file
      actions.push({
        type: "modify",
        path: "plop/partials/{{generator}}/index.mjs",
        pattern: /(^\);)(?=\n*export)/gm,
        template: '$1\n{{> readFileSyncDeclaration }}',
        skip: () => {
          if (!generatorIndexExists) {
            return "Already added info to index";
          }
        }
      });

      //add file to the export in generator named dir index file
      actions.push({
        type: "modify",
        path: "plop/partials/{{generator}}/index.mjs",
        pattern: /^([\s*|\t*].*)(?=\n*})/gm,
        template: `$1,\n\t${partialName}`,
        skip: () => {
          if (!generatorIndexExists) {
            return "Already added info to index";
          }
        }
      });

      //add generator index to partials index file
      actions.push({
        type: "modify",
        path: "plop/partials/index.mjs",
        pattern: /(import.*)(?=\n*export)/g,
        template: `$1\nimport {{generator}}Partials from "./{{generator}}/index.mjs";`,
        skip: () => {
          if (generatorIndexExists) {
            return "Import already added";
          }
        }
      });

      //spread generator name to partials index export
      actions.push({
        type: "modify",
        path: "plop/partials/index.mjs",
        pattern: /^([\s*|\t*].*)(?=\n*})/gm,
        template: `$1,\n\t...{{generator}}Partials`,
        skip: () => {
          if (generatorIndexExists) {
            return "Import already added";
          }
        }
      });

    return actions;
  }
};
