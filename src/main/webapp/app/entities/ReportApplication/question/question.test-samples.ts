import { IQuestion, NewQuestion } from './question.model';

export const sampleWithRequiredData: IQuestion = {
  id: 15516,
};

export const sampleWithPartialData: IQuestion = {
  id: 13514,
  question: 'stimulate upliftingly',
  answers: 'yippee',
};

export const sampleWithFullData: IQuestion = {
  id: 10400,
  question: 'expiate optimistically',
  answers: 'notwithstanding whose',
  points: 'ha',
};

export const sampleWithNewData: NewQuestion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
