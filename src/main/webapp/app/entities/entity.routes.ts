import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'material',
    data: { pageTitle: 'reportApplicationApp.reportApplicationMaterial.home.title' },
    loadChildren: () => import('./ReportApplication/material/material.routes'),
  },
  {
    path: 'student',
    data: { pageTitle: 'reportApplicationApp.reportApplicationStudent.home.title' },
    loadChildren: () => import('./ReportApplication/student/student.routes'),
  },
  {
    path: 'tests',
    data: { pageTitle: 'reportApplicationApp.reportApplicationTests.home.title' },
    loadChildren: () => import('./ReportApplication/tests/tests.routes'),
  },
  {
    path: 'question',
    data: { pageTitle: 'reportApplicationApp.reportApplicationQuestion.home.title' },
    loadChildren: () => import('./ReportApplication/question/question.routes'),
  },
  {
    path: 'tests-students',
    data: { pageTitle: 'reportApplicationApp.reportApplicationTestsStudents.home.title' },
    loadChildren: () => import('./ReportApplication/tests-students/tests-students.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
