import fs from "fs";

const readFileSyncDeclaration = fs.readFileSync(
  "plop/partials/newPlopPartial/readFileSyncDeclaration.partial.hbs",
  "utf8"
);

export default {
  readFileSyncDeclaration
};