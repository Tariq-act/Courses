export interface SyllabusItem {
  week: number;
  topic: string;
  content: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "Open" | "Closed"; // Assuming it's one of these two values
  price: number;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: SyllabusItem[];
  students: Student[];
}
