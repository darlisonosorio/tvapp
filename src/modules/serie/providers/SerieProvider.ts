import BaseProvider from "../../../api/BaseProvider";
import { Serie } from "../@types";

interface SearchSerie {
  score: number;
  show: Serie;
}

const serieProvider = new BaseProvider<Serie, SearchSerie>('/shows');

export default serieProvider;
