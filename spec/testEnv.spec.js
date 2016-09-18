describe('Test env check', () => {
  it('should pass', () => {
    const testEnvCheck = require('../src/testEnv.js').check;
    const input = 'I am Lrrr';
    const expectedOutput = 'ruler of Omicron Persei 8';

    const path = require('path');
    let testRunner = path.basename(process.argv[1]);

    let runnerTable = {
      jest: () =>
        expect(testEnvCheck(input)).toBe(expectedOutput),

      _mocha: () => {
        let chai = require('chai');
        let expect = chai.expect;
        expect(testEnvCheck(input)).to.equal(expectedOutput);
      },
    };

    let testFunc = runnerTable[testRunner];
    if (testFunc) {
      testFunc();
    } else {
      throw `Test runner '${testRunner}' not supported`;
    }
  });
});
