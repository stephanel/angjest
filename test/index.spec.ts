jest.mock('child_process');

import { execSync } from 'child_process';
import * as app from '../src/index';

describe('AngJest', () => {
    it('should setup angular project', () => {
        app.run();

        expect(execSync).toHaveBeenCalledWith('npm -v', expect.any(Object));
        /*
        expect node run 'npm install -D jest jest-preset-angular @types/jest'
        expect node run 'npm install -D jest jest-preset-angular @types/jest'

        expect node create file  './setupJest.ts'

        expect node add Jest configuration to package.json file

        expect node adjust "compilerOptions.types" section in tsconfig.spec.json

        expect node adjust "scripts" section in package.json

        expect node remove "projects.[your-project].architect.test" section in angular.json

        expect node run 'npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter'

        expect node run 'npm remove jasmine @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter'
        if user asked for

        expect node has removed file './karma.conf.js'
        */
    });
});
