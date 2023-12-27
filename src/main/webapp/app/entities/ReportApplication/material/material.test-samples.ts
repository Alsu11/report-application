import { IMaterial, NewMaterial } from './material.model';

export const sampleWithRequiredData: IMaterial = {
  id: 23559,
};

export const sampleWithPartialData: IMaterial = {
  id: 3847,
  topic: 'whenever',
};

export const sampleWithFullData: IMaterial = {
  id: 21728,
  topic: 'armor trinket how',
  link: 'huzzah',
};

export const sampleWithNewData: NewMaterial = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
