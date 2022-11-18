export interface Serie {
  favorite?: boolean;
  id: string;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: Date;
  ended: Date;
  officialSite: string;
  image?: SerieImage;
  rating: SerieRating;
  summary: string;
}

export interface SerieImage {
  medium: string;
  original: string;
}

export interface SerieRating {
  average: number;
}