import fs from "fs";

const reactImport = fs.readFileSync(
  "plop/partials/newComponent/reactImport.partial.hbs",
  "utf8"
);
const useEffectContent = fs.readFileSync(
  "plop/partials/newComponent/useEffectContent.partial.hbs",
  "utf8"
);
const useStateContent = fs.readFileSync(
  "plop/partials/newComponent/useStateContent.partial.hbs",
  "utf8"
);
const reduxImport = fs.readFileSync(
  "plop/partials/newComponent/reduxImport.partial.hbs",
  "utf8"
);
const useSelectorContent = fs.readFileSync(
  "plop/partials/newComponent/useSelectorContent.partial.hbs",
  "utf8"
);
const useDispatchContent = fs.readFileSync(
  "plop/partials/newComponent/useDispatchContent.partial.hbs",
  "utf8"
);
const getDerivedStateFromPropsContent = fs.readFileSync(
  "plop/partials/newComponent/getDerivedStateFromPropsContent.partial.hbs",
  "utf8"
);
const componentDidMountContent = fs.readFileSync(
  "plop/partials/newComponent/componentDidMountContent.partial.hbs",
  "utf8"
);
const shouldComponentUpdateContent = fs.readFileSync(
  "plop/partials/newComponent/shouldComponentUpdateContent.partial.hbs",
  "utf8"
);
const getSnapshotBeforeUpdateContent = fs.readFileSync(
  "plop/partials/newComponent/getSnapshotBeforeUpdateContent.partial.hbs",
  "utf8"
);
const componentDidUpdateContent = fs.readFileSync(
  "plop/partials/newComponent/componentDidUpdateContent.partial.hbs",
  "utf8"
);
const componentWillUnmountContent = fs.readFileSync(
  "plop/partials/newComponent/componentWillUnmountContent.partial.hbs",
  "utf8"
);
const lifecycleMethodsContent = fs.readFileSync(
  "plop/partials/newComponent/lifecycleMethodsContent.partial.hbs",
  "utf8"
);
const propCheckContent = fs.readFileSync(
  "plop/partials/newComponent/propCheckContent.partial.hbs",
  "utf8"
);
const reduxFunctionContent = fs.readFileSync(
  "plop/partials/newComponent/reduxFunctionContent.partial.hbs",
  "utf8"
);
const classComponentExport = fs.readFileSync(
  "plop/partials/newComponent/classComponentExport.partial.hbs",
  "utf8"
);

export default {
  reactImport,
  useEffectContent,
  useStateContent,
  reduxImport,
  useSelectorContent,
  useDispatchContent,
  getDerivedStateFromPropsContent,
  componentDidMountContent,
  shouldComponentUpdateContent,
  getSnapshotBeforeUpdateContent,
  componentDidUpdateContent,
  componentWillUnmountContent,
	lifecycleMethodsContent,
	propCheckContent,
	reduxFunctionContent,
	classComponentExport
};
