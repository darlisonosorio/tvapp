import { Serie } from '../@types';

import {
  SET_SERIE,
  SET_FAVORITE,
} from './constants';

interface SerieState {
  serie: Serie | null;
  favorites: Serie[];
}

export const initialState: SerieState = {
  serie: null,
  favorites: [],
}

export interface setSerieAction {
  type: 'SET_SERIE',
  value: Serie,
}

export interface setFavoriteAction {
  type: 'SET_FAVORITE',
  value: Serie,
}

type Action = setSerieAction | setFavoriteAction;

export default (state = initialState, action: Action): SerieState => {
  switch(action.type) {
    case SET_SERIE:
      return { ...state, serie: action.value };
    case SET_FAVORITE:
      const favorites = state.favorites;
      if (favorites.includes(action.value)) {
        favorites.splice(favorites.indexOf(action.value), 1)
        action.value.favorite = false;
      } else {
        favorites.push(action.value);
        action.value.favorite = true;
      }
      return { ...state, favorites };
    default:
      return state;
  }
};
