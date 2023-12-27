import { IStudent } from 'app/entities/ReportApplication/student/student.model';
import { ITests } from 'app/entities/ReportApplication/tests/tests.model';

export interface ITestsStudents {
  id: number;
  result?: string | null;
  studentId?: IStudent | null;
  testId?: ITests | null;
}

export type NewTestsStudents = Omit<ITestsStudents, 'id'> & { id: null };
