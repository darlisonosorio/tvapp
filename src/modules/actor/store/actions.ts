import { Person } from '../@types';
import { SET_PERSON } from './constants';

import {
  setPersonAction,
} from './reducer';

export const setPerson = (value: Person): setPersonAction => {
  return {
    type: SET_PERSON,
    value
  }
};
