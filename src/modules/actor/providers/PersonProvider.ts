import { Serie } from "@src/modules/serie/@types";
import BaseProvider from "../../../api/BaseProvider";
import { Person } from "../@types";

interface SearchPerson {
  score: number;
  person: Person;
}

export interface CastCredit {
  _embedded: EmbeddedCredit;
}

interface EmbeddedCredit {
  show: Serie;
};

class PersonProvider extends BaseProvider<Person, SearchPerson> {
  constructor() {
    super('/people');
  }

  getCastCredtis(id: number) {
    return this.query<CastCredit>(`/${id}/castcredits`, { embed: 'show' });
  }
}

const personProvider = new PersonProvider();
export default personProvider;
