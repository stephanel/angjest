import * as path from 'path';
import * as commandRunner from './command-runnner';
import * as file from './file';
import * as packageInfo from './package-info';

// https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
import * as cli from './cli';


const cwd = path.basename(process.cwd());
console.log(`${packageInfo.getPackageName()} ${packageInfo.getVersion()}`);
console.log(`${cwd}`);


if (!file.angularJsonFileExists()) {
    cli.notAnAngularApplication();
    process.exit(1);
}

if (!file.packageJsonFileExists()) {
    cli.packageJsonFileDoesNotExists();
    process.exit(1);
}

export function run(): void {
    commandRunner.getVersion();
    commandRunner.installJestAndDependencies();
    commandRunner.createTsFileSetupJest();
    file.writeFile('./setupJest.ts', 'import \'jest-preset-angular\';');
}
