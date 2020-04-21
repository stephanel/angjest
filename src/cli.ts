import * as chalk from 'chalk';

export function notAnAngularApplication(): void {
    console.error('file angular.json does not exists');
}

export function packageJsonFileDoesNotExists(): void {
    console.error('file package.json does not exists');
}
