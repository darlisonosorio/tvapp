import { Person } from '../@types';

import {
  SET_PERSON,
} from './constants';

interface PersonState {
  person: Person | null;
}

export const initialState: PersonState = {
  person: null,
}

export interface setPersonAction {
  type: 'SET_PERSON',
  value: Person,
}

type Action = setPersonAction;

export default (state = initialState, action: Action): PersonState => {
  switch(action.type) {
    case SET_PERSON:
      return { ...state, person: action.value };
    default:
      return state;
  }
};
