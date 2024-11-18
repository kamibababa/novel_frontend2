export interface Book {
  title: string;
  nvlid: string;
  nvlpic: string;
}
export interface Chapter {
  title: string;
  author: string;
  intro: string;
  image: string;
  chapters: ChapterItem[];
}
interface ChapterItem {
  chapid: number;
  title: string;
}
export interface Content {
  title: string;
  catalogue: string;
  content: string;
}