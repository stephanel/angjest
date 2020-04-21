const pkg = require('../package.json');

export function getPackageName(): string {
  return pkg.name;
}

export function getVersion(): string {
  return pkg.version;
}