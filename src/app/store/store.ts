
import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { superHeroSlice } from "entities/SuperHero/model/superHeroSlice";
import { ISuperHeroState } from "entities/SuperHero/model/type";
import { APP_ENV } from "shared/config";
import { ENameSlice } from "shared/types/type";

export interface RootState {
  [ENameSlice.SUPER_HERO]: ISuperHeroState;
}

const rootReducer = combineReducers<RootState>({
  superHero: superHeroSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: APP_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;