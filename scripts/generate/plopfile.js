import generators from "../templates/plop/generators/index.js";
import actions from "../templates/plop/actions/index.js";
import partials from "../templates/plop/partials/index.js";
import helpers from "../templates/plop/helpers/index.js";

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