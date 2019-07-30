import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as FavoritesActions } from "../ducks/favorites";

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const idDuplicated = yield select(state =>
      state.favorites.data.find(f => f.id === data.id)
    );

    if (idDuplicated) {
      yield put(FavoritesActions.addFavoritesFailure("Repositori duplicado."));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url
      };
      yield put(FavoritesActions.addFavoritesSuccess(repositoryData));
    }
  } catch (error) {
    yield put(
      FavoritesActions.addFavoritesFailure("Erro ao adicionar repositorio.")
    );
  }
}
