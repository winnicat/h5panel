const resolveNode = require("eslint-import-resolver-node").resolve; // eslint-disable-line

exports.interfaceVersion = 2;
exports.resolve = function resolve(source, file, config) {
  const f = resolveNode(source, file, config);

  if (f.found) {
    return f;
  }
  if (/^(?:i18n|@hejia)/.test(source)) {
    return { found: true, path: null };
  }
  return { found: false, path: null };
};

