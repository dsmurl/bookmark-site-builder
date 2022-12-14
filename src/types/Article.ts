export interface Article {
  id: number;
  title: string;
  url: string;
  description: string;
  createDate: Date | string;
  lastUpdate: Date | string;
}
