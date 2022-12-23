import generators from "../../plop/initialize/generators/index.js";
import actions from "../../plop/initialize/actions/index.js";
import partials from "../../plop/initialize/partials/index.js";
import helpers from "../../plop/initialize/helpers/index.js";

const setGenerators = (plop) => {
  for (const generator in generators) {
    plop.setGenerator(generator, generators[generator]);
  }
};

const setActions = (plop) => {
  for (const action in actions) {
    plop.setActionType(action, actions[action]);
  }
};

const setPartials = (plop) => {
  for (const partial in partials) {
    plop.setPartial(partial, partials[partial]);
  }
};

const setHelpers = (plop) => {
  for (const helper in helpers) {
    plop.setHelper(helper, helpers[helper]);
  }
};

export default function (plop) {
  setGenerators(plop);
  setActions(plop);
  setPartials(plop);
  setHelpers(plop);
}