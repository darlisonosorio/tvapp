import BaseProvider from "../../../api/BaseProvider";
import { Episode, Serie } from "../@types";

interface SearchSerie {
  score: number;
  show: Serie;
}

class SerieProvider extends BaseProvider<Serie, SearchSerie> {
  constructor() {
    super('/shows');
  }

  getEpisodes(idSerie: string, params = {}) {
    return this.query<Episode>(`/${idSerie}/episodes`, params)
  }
}

const serieProvider = new SerieProvider();
export default serieProvider;
