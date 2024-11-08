# GithubIssues

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## TanStack Query installation

Run `npm i @tanstack/angular-query-experimental` to to install tanStack. You can also find more info in  `https://tanstack.com/query/latest/docs/framework/angular/installation`.

## Pre sett to use tanStack 

In  `app.config.ts` we need to add this line in providers `provideTanStackQuery(new QueryClient())`, and import required components.

## Add DevTools

In `app.config.ts` we need to add this line in providers `, withDevtools()`.

## Devtools explication

Now `Devtools` are added by default, just in case we need to manage how to see ir check in these page to see how to do it `https://tanstack.com/query/latest/docs/framework/angular/devtools`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
