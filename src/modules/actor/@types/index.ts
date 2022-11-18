export interface Person {
  id: number;
  name: string;
  url: string;
  birthday: Date;
  deathday?: Date;
  gender: string;
  image?: PersonImage;
  country?: PersonCountry;
}

export interface PersonImage {
  medium?: string;
  original?: string;
}

export interface PersonCountry {
  name: string;
  code: string;
  timezone: string;
}