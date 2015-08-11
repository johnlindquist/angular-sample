//SystemJS Builder support for bundling TypeScript projects is coming soon:
// https://github.com/systemjs/builder/milestones/TypeScript%20Support
System.config({
    defaultJSExtensions: true,
    paths: {
        'angular2/*': '../node_modules/angular2/*.js',
        'rx': '../node_modules/angular2/node_modules/rx/dist/rx.js'
    }
});