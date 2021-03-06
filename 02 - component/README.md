# Component

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## What will we learn in this tutorial
1) The basic structure of a component
2) ngif for conditions and ngFor to iterate over array and generate markup
3) Test cases to detect:
    - Component creation 
    - Detect the pipe works as expected
    - Rendering of the html element with default value of title
    - Rendering of the html element with runtime updated value of title 
4) End to test to check the rendering the html element with expected text
5) Use SCSS as default ext for style files
6) Introduction to BEM model to write reusable css using partials

## Steps to run the app:
- Clone the folder and run <b>npm i</b> to use the app.
- run <b>ng serve</b>
- run <b>ng serve --port 9000</b> if you want to run of a specific port
- run <b>ng test</b> to unit test using karma
- run <b>ng e2e</b> for end to end testing using protractor

## Excercise
1) Change the default number of the classes to 20
2) Write test case to detect the number of classes
3) Update the categories array and use 5 items in it 
4) Update test cases to detect the number of categories
5) Use category with no item in it and check that element is not generated in DOM.
6) Write test cases to check the method written in class

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
