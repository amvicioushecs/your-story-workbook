
export interface WorkbookQuestion {
  id: string;
  question: string;
  placeholder: string;
  multiline?: boolean;
  type?: 'text' | 'circle-cross' | 'signature' | 'commit';
  options?: string[];
}

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  snapshot?: string;
  questions: WorkbookQuestion[];
}
