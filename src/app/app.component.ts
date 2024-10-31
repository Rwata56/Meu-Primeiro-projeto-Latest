import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateVariableComponent } from './components/new-component/template-variable/template-variable.component';
import { TemplateControlFlowComponent } from './components/new-component/templateVariable/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/new-component/templateVariable/template-deferrable-views/template-deferrable-views.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
            NewComponentComponent, TemplateVariableComponent,
            TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
  template:
    `
    <h1>Curso de Angular</h1>
    <app-new-component />
    <app-template-variable />
    <app-template-control-flow />
    <app-template-deferrable-views />
  `,
})
export class AppComponent {
  title = 'Meu-Primeiro-projeto-Latest';
}
