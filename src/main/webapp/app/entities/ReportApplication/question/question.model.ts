import { ITests } from 'app/entities/ReportApplication/tests/tests.model';

export interface IQuestion {
  id: number;
  question?: string | null;
  answers?: string | null;
  points?: string | null;
  testId?: ITests | null;
}

export type NewQuestion = Omit<IQuestion, 'id'> & { id: null };
