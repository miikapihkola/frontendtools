import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [

    { path: 'feedback', component: FeedbackComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'hello', component: HelloWorldComponent },
    { path: '', redirectTo: 'feedback', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
