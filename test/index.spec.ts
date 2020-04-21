import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

import * as app from '../src/index';

describe('AngJest', () => {

    it('Should warn user and exit process when application is not an angular application', async () => {
        jest.mock('fs', () => ({
            existsSync: jest.fn().mockReturnValue(true)
        }));

        console.error = jest.fn();
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { return undefined as never });

        expect(console.log).toHaveBeenCalledWith('file angular.json does not exists'); 
        expect(mockExit).toBeCalledWith(1);

        mockExit.mockRestore()  // to avoid side-effect
    });

    it('should setup angular project', async () => {

        const childProcessMock = {
            execSync: jest.fn()
                .mockReturnValueOnce('npm version is x.x.x.x')
                .mockReturnValueOnce('jest and all related dependencies installed with success')
                .mockReturnValueOnce('file setupTest created')
        };
        
        const pathMock = {
            basename: jest.fn().mockReturnValue('basename/path'),
            resolve: jest.fn().mockReturnValue('resolve/path')
        };
        
        jest.mock('child_process', () => (childProcessMock));
        jest.mock('fs');
        jest.mock('path', () => (pathMock));
        
        app.run();

        expect(execSync).toHaveBeenCalledWith('npm -v', expect.any(Object));
        expect(execSync).toHaveBeenCalledWith('npm install -D jest jest-preset-angular @types/jest', expect.any(Object));
        expect(execSync).toHaveBeenCalledWith('touch ./setupJest.ts', expect.any(Object));

        expect(writeFileSync).toHaveBeenCalledWith('./setupJest.ts', 'import \'jest-preset-angular\';');

        /*
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
