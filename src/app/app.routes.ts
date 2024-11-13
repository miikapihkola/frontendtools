import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [

    { path: 'reactiveform', component: ReactiveFormComponent },
    { path: 'templateform', component: TemplateFormComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'hello', component: HelloWorldComponent },
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
