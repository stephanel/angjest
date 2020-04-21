import { writeFileSync, existsSync } from 'fs';

export function writeFile(filename: string, data: string | Buffer) {
    writeFileSync(filename, data);
}

export function angularJsonFileExists(): boolean {
    return existsSync('./angular.json');
}

export function packageJsonFileExists(): boolean {
    return existsSync('./package.json');
}
