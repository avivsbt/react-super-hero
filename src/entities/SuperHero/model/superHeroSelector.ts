import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/store/store";
import { selectAll, selectEntities, selectIds } from "./superHeroSlice";

export const superHeroSelector = createSelector(
  (state: RootState) => state.superHero,
  superHero => superHero
);

export const getSuperHeroSelector = createSelector(
  selectAll, 
  (stats) => stats
);

export const getSuperHeroIdsSelector = createSelector(
  selectIds, 
  (stats) => stats
);

export const getSuperHeroEntitiesSelector = createSelector(
  selectEntities, 
  (stats) => stats
);