interface BaseExp {
  id: number;
  institution: string;
  location: string;
  duration: string;
  icon: string;
}

export interface IWorkExp extends BaseExp {
  position: string;
  responsibilities: string[];
}

export interface IAcademicExp extends BaseExp {
  course: string;
  grade: string;
}
