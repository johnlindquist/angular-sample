/// <reference path="typings/tsd.d.ts" />
import {Component, View, bootstrap} from "angular2/angular2";

@Component({
    selector: "app"
})
@View({
    template: `Hello {{name}}`
})
class App{
    name: string = "John";
}

bootstrap(App);