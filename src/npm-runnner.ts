import { execSync } from 'child_process';
import * as path from 'path';

const SEPARATOR = process.platform === 'win32' ? ';' : ':',
    env = Object.assign({}, process.env);

env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;

export const getVersion = (): void => {
    const output = execSync('npm -v', {
        cwd: process.cwd(),
        env: env,
    });
    console.log(`verion: ${output}`);
};
