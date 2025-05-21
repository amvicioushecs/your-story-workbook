
import { Chapter } from './chapterTypes';
import { chapter1 } from './chapters/chapter1';
import { chapter2 } from './chapters/chapter2';
import { chapter3 } from './chapters/chapter3';
import { chapter4 } from './chapters/chapter4';
import { chapter5 } from './chapters/chapter5';
import { chapter6 } from './chapters/chapter6';

export type { WorkbookQuestion, Chapter } from './chapterTypes';

export const chapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6
];
