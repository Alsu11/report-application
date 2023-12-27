import { ITests, NewTests } from './tests.model';

export const sampleWithRequiredData: ITests = {
  id: 18998,
};

export const sampleWithPartialData: ITests = {
  id: 3549,
};

export const sampleWithFullData: ITests = {
  id: 8158,
  subject: 'dwindle gargle even',
};

export const sampleWithNewData: NewTests = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
