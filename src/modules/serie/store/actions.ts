import { Serie } from '../@types';
import { SET_SERIE, SET_FAVORITE } from './constants';

import {
  setSerieAction,
  setFavoriteAction,
} from './reducer';

export const setSerie = (value: Serie): setSerieAction => {
  return {
    type: SET_SERIE,
    value
  }
};

export const setFavorite = (value: Serie): setFavoriteAction => {
  return {
    type: SET_FAVORITE,
    value
  }
};