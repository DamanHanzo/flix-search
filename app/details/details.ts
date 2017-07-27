export interface Details {
  name: string;
  url: string;
  image: {
    original: string;
  }
  rating: {
    average: number;
  }
  schedule: {
    days?: string[];
  }
  network: {
    name: string;
  }
  premiered: string;
  status: string;
  summary: string;
}