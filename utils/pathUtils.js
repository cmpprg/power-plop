import { join } from "node:path";
import {
  GENERATOR_EXTENSION,
  PARTIAL_EXTENSION,
  TEMPLATE_EXTENSION,
  ACTION_EXTENSION,
  HELPER_EXTENSION,
  INDEX_FILE_NAME,
  TEMPLATES_DIR_NAME,
} from './constants'


class templatePathUtils {
  constructor(rootPath) {
    this.rootPath = rootPath
  }

  //Directories
  generatorsDirPath = () =>
    join(this.rootPath, TEMPLATES_DIR_NAME, "generators");
  
  actionsDirPath = () =>
    join(this.rootPath, TEMPLATES_DIR_NAME, "actions")
  
  helpersDirPath = () =>
    join(this.rootPath, TEMPLATES_DIR_NAME, "helpers")
  
  partialsDirPath = () =>
    join(this.rootPath, TEMPLATES_DIR_NAME, "partials")
  

  //Index File Paths
  generatorsIndexPath = () =>
    join(this.generatorsDirPath(), INDEX_FILE_NAME)
  
  actionsIndexPath = () =>
    join(this.actionsDirPath(), INDEX_FILE_NAME)
  
  helpersIndexPath = () =>
    join(this.helpersDirPath(), INDEX_FILE_NAME)
  
  partialIndexPath = () =>
    join(this.partialsDirPath(), INDEX_FILE_NAME)
  
  partialSubIndexPath = (generatorName) =>
    join(this.partialsDirPath(), generatorName, INDEX_FILE_NAME)
  

  //Other File Paths
  partialTemplatePath = (generatorName, partialName) =>
    join(this.partialsDirPath(), this.displayGeneratorName(generatorName), partialName + PARTIAL_EXTENSION)
  
  generatorTemplatePath = (generatorName, partialName) =>
    join(this.generatorsDirPath(), this.displayGeneratorName(generatorName), partialName + TEMPLATE_EXTENSION)
  
  actionPath = (actionName) =>
    join(this.actionsDirPath(), actionName, actionName + ACTION_EXTENSION)
  
  helperPath = (helperName) =>
    join(this.helpersDirPath(), helperName, helperName + HELPER_EXTENSION)
  
  generatorPath = (generatorName) =>
    join(this.generatorsDirPath(), generatorName, generatorName + GENERATOR_EXTENSION)
  

  //Helper Methods
  displayGeneratorName = (name) =>
    name === "None" ? '' : name
  
}

export default templatePathUtils