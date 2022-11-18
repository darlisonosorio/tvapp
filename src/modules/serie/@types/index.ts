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
  schedule: SerieSchedule;
}

export interface SerieImage {
  medium: string;
  original: string;
}

export interface SerieRating {
  average: number;
}

export interface SerieSchedule {
  time: string,
  days: string[],
}

export interface Episode {
  id: number;
  name: string;
  url: string;
  season: number;
  number: number;
  type: string;
  airdate: Date;
  airtime: string;
  runtime: number;
  rating: SerieRating;
  image: SerieImage;
  summary: string;
}