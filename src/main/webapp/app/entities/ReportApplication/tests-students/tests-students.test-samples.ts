import { ITestsStudents, NewTestsStudents } from './tests-students.model';

export const sampleWithRequiredData: ITestsStudents = {
  id: 18246,
};

export const sampleWithPartialData: ITestsStudents = {
  id: 23489,
};

export const sampleWithFullData: ITestsStudents = {
  id: 13156,
  result: 'obediently',
};

export const sampleWithNewData: NewTestsStudents = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
