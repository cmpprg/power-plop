import { readFileSync } from "node:fs";
import { buildTemplatePathUtils } from "@single_ops/so_build_templates/utils/pathUtils.js";

const readFileSyncDeclaration = readFileSync(
  buildTemplatePathUtils.partialTemplatePath(
    "partial",
    "readFileSyncDeclaration"
  ),
  "utf8"
);

export default {
  readFileSyncDeclaration,
};
