import UserConfig from "./userConfig";
import { join } from "node:path"

describe("UserConfig", () => {
  it("exists", () => {
    const config = new UserConfig();

    expect(config).toBeInstanceOf(UserConfig);
  });

  it("should take be able to accept dirPath string as constructor arg", () => {
    const path = "This is the path";
    const objectArgs = {
      dirPath: path,
    };
    const config = new UserConfig(objectArgs);

    expect(config.dirPath).toBe(join(process.cwd(), path));
  });

  it("should default to cwd if no dirPath is given", () => {
    const config = new UserConfig();

    expect(config.dirPath).toBe(process.cwd());
  });

  it("should take be able to accept fileName string as constructor arg", () => {
    const fileName = "otherFileName";
    const objectArgs = {
      fileName: fileName,
    };
    const config = new UserConfig(objectArgs);

    expect(config.fileName).toBe(`${fileName}.config.js`);
  });

  it("should should default to powerPlop.config.js if no file name given.", () => {
    const config = new UserConfig();

    expect(config.fileName).toBe("powerPlop.config.js");
  });

  it('should have access to fullPath state', () => {
    const path = "lib/UserConfig/testFixtures"
    const name = "testConfig"
    const objectArgs = {
      dirPath: path,
      fileName: name
    }
    const config = new UserConfig(objectArgs);

    expect(config.fullPath).toBe(join(process.cwd(), path, name + ".config.js"))
  });

  it("should dynamically import config file based on dirPath and fileName", () => {
    const objectArgs = {
      dirPath: "lib/UserConfig/testFixtures",
      fileName: "testConfig"
    }
    const config = new UserConfig(objectArgs);

    return config.retrieveConfig().then((data) => {
      expect(data).toStrictEqual(
        expect.objectContaining({
          root: "test",
          initType: "package",
        }),
      );
    });
  });

  it('should have access to root value from config file', () => {
    const objectArgs = {
      dirPath: "lib/UserConfig/testFixtures",
      fileName: "testConfig"
    }
    const config = new UserConfig(objectArgs);

    return config.root().then(data => {
      expect(data).toBe("test")
    })
  });

  it('should have access to initType value from config file', () => {
    const objectArgs = {
      dirPath: "lib/UserConfig/testFixtures",
      fileName: "testConfig"
    }
    const config = new UserConfig(objectArgs);

    return config.initType().then(data => {
      expect(data).toBe("package")
    })
  });
});
