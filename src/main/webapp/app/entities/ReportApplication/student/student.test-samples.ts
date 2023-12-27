import { IStudent, NewStudent } from './student.model';

export const sampleWithRequiredData: IStudent = {
  id: 8189,
};

export const sampleWithPartialData: IStudent = {
  id: 10061,
  lastName: 'Hoppe',
};

export const sampleWithFullData: IStudent = {
  id: 14607,
  firstName: 'Jovanny',
  lastName: 'Bogisich-Stoltenberg',
};

export const sampleWithNewData: NewStudent = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
