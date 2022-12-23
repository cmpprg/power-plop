import { readFileSync } from "node:fs";
import { buildTemplatePathUtils } from "@single_ops/so_build_templates/utils/pathUtils.js";

const readFileSyncDeclaration = readFileSync(
  buildTemplatePathUtils.partialTemplatePath(
    "newPlopPartial",
    "readFileSyncDeclaration"
  ),
  "utf8"
);

export default {
  readFileSyncDeclaration,
};
