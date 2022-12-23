import { readFileSync } from "node:fs";
import { powerPlopPathUtils } from "../../../../utils/pathUtils.js";

const readFileSyncDeclaration = readFileSync(
  powerPlopPathUtils.partialTemplatePath(
    "partial",
    "readFileSyncDeclaration"
  ),
  "utf8"
);

export default {
  readFileSyncDeclaration,
};
