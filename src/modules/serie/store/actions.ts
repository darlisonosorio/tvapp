import { Serie } from '../@types';
import { SET_FAVORITE } from './constants';

import {
  setFavoriteAction,
} from './reducer';

export const setFavorite = (value: Serie): setFavoriteAction => {
  return {
    type: SET_FAVORITE,
    value
  }
};