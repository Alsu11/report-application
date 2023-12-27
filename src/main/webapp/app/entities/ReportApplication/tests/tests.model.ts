import { IMaterial } from 'app/entities/ReportApplication/material/material.model';

export interface ITests {
  id: number;
  subject?: string | null;
  materialId?: IMaterial | null;
}

export type NewTests = Omit<ITests, 'id'> & { id: null };
