import * as runner from './npm-runnner';
import * as pinfo from './package-info';

console.log('Heeelo Ya!');
console.log(`${pinfo.getPackageName()} - ${pinfo.getVersion()}`);

export function run(): void {
    runner.getVersion();
}
