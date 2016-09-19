#### Yet another JavaScript boilerplate

I made this repo for my own benefit to help me remember how to set this stack up.
The core stack is consist of Webpack and Babel. The test stack is consist of Mocha/Chai/Enzyme or Jest.
The initial setup is based off of ["Build Your Own Starter"](http://andrewhfarmer.com/build-your-own-starter/).

---

#### A. JS/npm init

  1. Create your project directory then cd into that directory

    `mkdir project_name && cd $_`

  2. `npm init -y`

  3. Update `"repository"` and `"description"` values in package.json. They shouldn't affect the working of your code but it will stop NPM from issuing warnings about an invalid repository and description every time you install a package. For example:

    ```
      "repository": "https://some.gitrepo.com/your_account/app_name",
      "description": "App description"
    ```


#### B. Babel

  1. `npm install --save babel-core babel-preset-es2015`

  2. Setup presets

    Add `{ "presets": [ "es2015" ] }` either to file .babelrc or to a key in package.json called `"babel"`. Example:

    ```
      "babel": {
        "presets": [
          "es2015"
        ]
      },
    ```


#### C. Webpack

  1. `npm install --save webpack babel-loader`

  2. Create main entry point source file. Take note of path. It will be entered in the Webpack configuration.

    ```
      mkdir src
      echo "console.log('Good news, everyone!');" > src/index.js
    ```

  3. Create your Webpack config file. Here's an example: [webpack.config.js](webpack.config.js).

  4. Update `"main"` value in package.json to `"webpack.config.js"`

  5. Update `"scripts"["compile"]` value in package.json to `"webpack"`

  6. Install dev server

    `npm install --save-dev webpack-dev-server`

  7. Update `"scripts"["start"]` value in package.json to `"webpack-dev-server"`


#### D. Setup testing environment

*Using Mocha, Chai and Enzyme (from [Testing React.js Components with Enzyme, Mocha, and Chai](https://medium.com/@jerrymao/testing-react-js-components-with-enzyme-mocha-and-chai-534c7f000976#.1lfeniau9))*

  1. Install modules

    ```
    npm install --save-dev \
      enzyme mocha chai jsdom react-addons-test-utils cheerio \
      babel-register babel-preset-airbnb babel-preset-react babel-preset-es2015
    ```

  2. Add `"airbnb"` preset to the `"babel"["presets"]` array in package.json

  3. Create a [JSDOM configuration file](spec/jsdom.js)

  4. Update `"scripts"["test"]` value in package.json to `"mocha --recursive ./spec/jsdom.js ./spec"`

    *Optional*: configure test to run a process that will watch the test directory for any changes, then run the tests when changes occur.

    `"clear && mocha --recursive --watch --growl ./spec/jsdom.js ./spec"`


*Using Jest*

  1. Install modules

    `npm install --save-dev jest-cli babel-jest`

    Possibly another useful module: react-addons-test-utils

  2. Update `"scripts"["test"]` value in package.json to `"jest"`

    *Optional*: configure test to run a process that will watch the test directory for any changes, then run the tests when changes occur.

    `"jest --watch"`


*Verify test setup is working.*

  1. Create [test file](spec/testEnv.spec.js)

  2. Run `npm test` # result should be error.

  3. Create file src/testEnv.js

    ```
    export function check(input) {
    }
    ```

  4. Run `npm test` # (OR check result if you used the --watch option) result should be test failure.

  5. Edit src/testEnv.js

    ```
    export function check(input) {
      if (input === 'I am Lrrr') return 'ruler of Omicron Persei 8';
    }
    ```

  6. Run `npm test` # (OR check result if you used the --watch option) result should be success.

  7. (Optional) remove test test files.


#### E. Dev server

  1. Create your index.html file. Here is an example: [index.html](index.html).

  2. Update `"scripts"["start"]` value in package.json to `"webpack-dev-server"`

  3. Run `npm start`

  4. Go to [http://localhost:8080](http://localhost:8080) on your browser

  5. You should see contents of your index.html file. If you used the example file, you should see the browser title change to "Title of your awesomeness".


#### F. React

  1. `npm install --save react react-dom babel-preset-react`

  2. Add `"react"` to the `"babel"["presets"]` array in package.json


#### G. Redux and friends

  `npm install --save redux redux-react redux-thunk`


#### H. New (TODO)

https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
https://github.com/webpack/webpack/issues/1151

"test": "clear && find spec/ -type f -name '*.spec.js' | xargs mocha --watch spec/helpers/jsdom.js"

  "scripts": {
    "start": "webpack-dev-server",
    "test": "clear && find spec/ -type f -name '*.spec.js' | xargs mocha --watch --growl spec/helpers/jsdom.js",
    "dev:hot": "webpack-dev-server --hot --inline --progress --colors --watch --display-error-details --display-cached --content-base ./"
  },

---

#### MIT License

Copyright (c) [2016]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
