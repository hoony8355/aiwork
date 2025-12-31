export interface Instructor {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Lecture {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  painPoints: string[];
  takeaways: string[];
  date: string;
  time: string;
  instructor: Instructor;
  promptExample: object;
}

export type CustomerType = '기관' | '기업' | '재단' | '학교' | '정부/지자체';

export interface RegistrationData {
  name: string; // 담당자명
  email: string; // 메일
  phone: string; // 전화번호
  organization: string; // 고객사명
  customerType: CustomerType; // 고객유형 (New)
  department: string; // 부서 (New)
  jobTitle: string; // 직책 (New)
  courseType: 'paid' | 'free';
  appliedAt: string; // 리드생성일
}

export enum PageView {
  HOME = 'HOME',
  PAID = 'PAID',
  FREE = 'FREE',
}