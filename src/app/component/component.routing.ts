import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { ContactComponent } from './contact/contact.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'risk',
        component: RiskAssessmentComponent,
      },
      {
        path: 'contacts',
        component: ContactComponent,
      },
    ],
  },
];
