import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [

    { path: 'calculator', component: CalculatorComponent },
    { path: 'hello', component: HelloWorldComponent },
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
