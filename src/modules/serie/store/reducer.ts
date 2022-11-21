import { Serie } from '../@types';

import {
  SET_FAVORITE,
} from './constants';

interface SerieState {
  favorites: Serie[];
}

export const initialState: SerieState = {
  favorites: [],
}

export interface setFavoriteAction {
  type: 'SET_FAVORITE',
  value: Serie,
}

type Action = setFavoriteAction;

export default (state = initialState, action: Action): SerieState => {
  switch(action.type) {
    case SET_FAVORITE:
      const favorites = state.favorites;
      if (favorites.includes(action.value)) {
        favorites.splice(favorites.indexOf(action.value), 1)
        action.value.favorite = false;
      } else {
        favorites.push(action.value);
        action.value.favorite = true;
      }
      return {
        ...state,
        favorites: favorites.sort((a, b) => a.name.localeCompare(b.name))
      };
    default:
      return state;
  }
};
