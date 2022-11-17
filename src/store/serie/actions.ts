import { Serie } from '@src/model/serie';
import { SET_SERIES, SET_FAVORITE } from './constants';

import {
  setSeriesAction,
  setFavoriteAction,
} from './reducer';

export const setSeries = (value: Serie[]): setSeriesAction => {
  return {
    type: SET_SERIES,
    value
  }
};

export const setFavorite = (value: Serie): setFavoriteAction => {
  return {
    type: SET_FAVORITE,
    value
  }
};