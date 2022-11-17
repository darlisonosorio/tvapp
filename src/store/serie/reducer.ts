import { Serie } from '@src/model/serie';

import {
  SET_SERIES,
  SET_FAVORITE,
} from './constants';

interface SerieState {
  series: Serie[];
  favorites: Serie[];
}

export const initialState: SerieState = {
  series: [],
  favorites: [],
}

export interface setSeriesAction {
  type: 'SET_SERIES',
  value: Serie[],
}

export interface setFavoriteAction {
  type: 'SET_FAVORITE',
  value: Serie,
}

type Action = setSeriesAction | setFavoriteAction;

export default (state = initialState, action: Action): SerieState => {
  switch(action.type) {
    case SET_SERIES:
      return { ...state, series: action.value };
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
