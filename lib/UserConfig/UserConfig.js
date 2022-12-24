import { join } from "node:path";

class UserConfig {
  constructor(objArgs) {
    this.fileName =
      (objArgs?.fileName && `${objArgs.fileName}.config.js`) ||
      "powerPlop.config.js";
    this.dirPath =
      (objArgs?.dirPath && join(process.cwd(), objArgs.dirPath)) ||
      process.cwd();
    this.fullPath = join(this.dirPath, this.fileName);
  }

  async root() {
    const config = await this.retrieveConfig()
    return config.root;
  }

  async initType() {
    const config = await this.retrieveConfig()
    return config.initType;
  }

  async retrieveConfig() {
    const config = await import(this.fullPath);
    return config.default;
  }
}

export default UserConfig;
