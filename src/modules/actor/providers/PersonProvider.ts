import BaseProvider from "../../../api/BaseProvider";
import { Person } from "../@types";

interface SearchPerson {
  score: number;
  person: Person;
}

const personProvider = new BaseProvider<Person, SearchPerson>('/people');

export default personProvider;
